import { QueryOptions } from "@tanstack/react-query";
import { getNameOfScenarios } from "../api/scenario-api";

export const ScenariosNameQueryOptions = (): QueryOptions => {
  return {
    queryKey: ["scenarioNames"],
    queryFn: getNameOfScenarios,
  };
};
