"use client";

import { DocsPage } from "fumadocs-ui/page";
import { useEffect, useState } from "react";

import { ActionButton } from "seed-design/ui/action-button";
import { ProgressCircle } from "seed-design/ui/progress-circle";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

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

    // 로딩 중 표시
    if (authState.isLoading) {
      return (
        <DocsPage>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <ProgressCircle value={undefined} />
          </div>
        </DocsPage>
      );
    }

    // 인증되지 않은 경우 비밀번호 입력 폼 표시
    if (!authState.isAuthenticated) {
      return (
        <DocsPage>
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full flex-col items-center justify-center space-y-4 p-4"
          >
            <div className="flex w-full max-w-[320px] flex-col items-center justify-center space-y-4">
              <TextField
                label="비밀번호"
                description="해당 컨텐츠는 내부 구성원에게만 공개되어 있어요."
                invalid={!!authState.error}
                errorMessage={authState.error}
                onValueChange={({ value }) => setPassword(value)}
                className="w-full"
              >
                <TextFieldInput autoFocus type="password" className="w-full" value={password} />
              </TextField>
              <ActionButton
                disabled={!password || authState.isLoading}
                loading={authState.isLoading}
                type="submit"
                className="w-full"
              >
                확인
              </ActionButton>
            </div>
          </form>
        </DocsPage>
      );
    }

    // 인증된 경우 원래 컴포넌트 렌더링
    return <WrappedComponent {...props} />;
  };
}
