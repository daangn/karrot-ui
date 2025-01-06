interface Env {
  PASSWORD: string;
  JWT_SECRET: string;
}

// JWT 토큰 생성 함수
const createToken = async (secret: string) => {
  // 헤더
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  // 페이로드 (24시간 유효)
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    iat: Math.floor(Date.now() / 1000),
  };

  // Base64Url 인코딩
  const encodeBase64Url = (input: string) => {
    return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  };

  // 헤더와 페이로드를 Base64Url로 인코딩
  const encodedHeader = encodeBase64Url(JSON.stringify(header));
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));

  // 서명 생성
  const encoder = new TextEncoder();
  const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, data);
  const encodedSignature = encodeBase64Url(String.fromCharCode(...new Uint8Array(signature)));

  // JWT 생성
  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
};

// JWT 토큰 검증 함수
const verifyToken = async (token: string, secret: string): Promise<boolean> => {
  try {
    const [headerB64, payloadB64, signatureB64] = token.split(".");

    // Base64Url 디코딩
    const decodeBase64Url = (input: string) => {
      const pad = "=".repeat((4 - (input.length % 4)) % 4);
      const base64 = (input + pad).replace(/-/g, "+").replace(/_/g, "/");
      return atob(base64);
    };

    // 페이로드 검증
    const payload = JSON.parse(decodeBase64Url(payloadB64));
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return false; // 토큰 만료
    }

    // 서명 검증
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );

    const data = encoder.encode(`${headerB64}.${payloadB64}`);
    const signature = new Uint8Array(
      decodeBase64Url(signatureB64)
        .split("")
        .map((c) => c.charCodeAt(0)),
    );

    return await crypto.subtle.verify("HMAC", key, signature, data);
  } catch {
    return false;
  }
};

export const onRequest: PagesFunction<Env> = async (context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Cookie",
    "Access-Control-Allow-Credentials": "true",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  // 세션 토큰 검증
  if (context.request.method === "GET") {
    const cookie = context.request.headers.get("Cookie");
    const token = cookie?.match(/auth_session=([^;]+)/)?.[1];

    if (token) {
      const isValid = await verifyToken(token, context.env.JWT_SECRET);

      return new Response(JSON.stringify({ valid: isValid }), {
        headers: { ...headers, "Content-Type": "application/json" },
        status: isValid ? 200 : 401,
      });
    }

    return new Response(JSON.stringify({ valid: false }), {
      status: 401,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  if (context.request.method === "POST") {
    try {
      const json = await context.request.json();
      const { password } = json as { password: string };

      if (password === context.env.PASSWORD) {
        const token = await createToken(context.env.JWT_SECRET);

        return new Response(JSON.stringify({ success: true, token }), {
          headers: {
            ...headers,
            "Content-Type": "application/json",
            "Set-Cookie": `auth_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
          },
        });
      }

      return new Response(JSON.stringify({ success: false }), {
        status: 401,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
  }
};
