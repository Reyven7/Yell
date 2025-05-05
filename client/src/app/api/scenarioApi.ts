import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/app/redux/baseQueryWithReauth";
import { ScenarioItem } from "@/types/item.types";

export const scenarioApi = createApi({
  reducerPath: "scenarioApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Scenario"],
  endpoints: (builder) => ({
    createScenario: builder.mutation<void, { name: string }>({
      query: (data) => ({
        url: "scenario/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Scenario"],
    }),
    getNameOfScenarios: builder.query<ScenarioItem[], void>({
      query: () => `scenario/`,
      providesTags: ["Scenario"],
    }),
    deleteScenario: builder.mutation<void, { id: string }>({
      query: (data) => ({
        url: "scenario/",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Scenario"],
    }),
    updateScenarioName: builder.mutation<void, { id: string; name: string }>({
      query: (data) => ({
        url: "scenario/rename",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Scenario"],
    }),
  }),
});

export const {
  useCreateScenarioMutation,
  useGetNameOfScenariosQuery,
  useDeleteScenarioMutation,
  useUpdateScenarioNameMutation,
} = scenarioApi;
