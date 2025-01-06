"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthComponent(props: P) {
    // const router = useRouter();
    const [password, setPassword] = useState("");
    const [authState, setAuthState] = useState<AuthState>({
      isAuthenticated: false,
      isLoading: true,
      error: null,
    });

    useEffect(() => {
      checkAuth();
    }, []);

    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        setAuthState({
          isAuthenticated: data.valid,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          error: error instanceof Error ? error.message : "인증 확인 중 오류가 발생했습니다",
        });
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });

        const data = await response.json();

        if (data.success) {
          setAuthState({
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            isLoading: false,
            error: "잘못된 비밀번호입니다.",
          });
        }
      } catch {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          error: "인증 중 오류가 발생했습니다.",
        });
      }
    };

    // 인증 오버레이 스타일
    const overlayStyle: React.CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    // 로딩 중 표시
    if (authState.isLoading) {
      return (
        <div style={overlayStyle}>
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            <p>인증 확인 중...</p>
          </div>
        </div>
      );
    }

    // 인증되지 않은 경우 비밀번호 입력 폼 표시
    if (!authState.isAuthenticated) {
      return (
        <div style={overlayStyle}>
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 p-4">
            <h1 className="text-2xl font-bold text-center">비밀번호 입력</h1>
            <div className="space-y-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border p-2"
                placeholder="비밀번호를 입력하세요"
              />
              {authState.error && <p className="text-sm text-red-500">{authState.error}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              확인
            </button>
          </form>
        </div>
      );
    }

    // 인증된 경우 원래 컴포넌트 렌더링
    return <WrappedComponent {...props} />;
  };
}
