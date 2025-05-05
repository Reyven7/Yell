import { User } from "@/types/user.types";
import { useAppDispatch, useAppSelector } from "./hooks";
import { clearUser, setUser } from "@/app/features/auth/authSlice";
import { authApi } from "@/app/api/authApi";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const saveUser = (user: User) => {
    dispatch(setUser(user));
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(clearUser());
    dispatch(authApi.util.resetApiState());
  };

  return { user, saveUser, signOut, isAuthenticated: !!user };
};
