import { AuthResponce, LoginCredential } from "@/types/auth.types";
import { User } from "@/types/user.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../redux/baseQueryWithReauth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponce, LoginCredential>({
      query: (credential) => ({
        url: "auth/login",
        method: "POST",
        body: credential,
      }),
      invalidatesTags: ["User"],
    }),
    getMe: builder.query<User, void>({
      query: () => `auth/me`,
      providesTags: ["User"],
    }),
    logout: builder.mutation<void, void>({
      query: () => `auth/logout`,
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery, useLogoutMutation } = authApi;
