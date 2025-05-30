import { login } from "@/app/api/auth-api";
import { LoginCredential } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredential) => login(credentials),
  });

  return {
    loginAsync: loginMutation.mutateAsync,
    ...loginMutation,
  };
};
