import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { FetchArgs } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (!headers.get("x-no-auth") && token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "auth/refresh",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "x-no-auth": "true",
          },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const { accessToken, refreshToken: newRefreshToken } =
          refreshResult.data as {
            accessToken: string;
            refreshToken: string;
          };

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        return await baseQuery(args, api, extraOptions);
      }
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.error("Token refresh failed");
  }

  return result;
};
