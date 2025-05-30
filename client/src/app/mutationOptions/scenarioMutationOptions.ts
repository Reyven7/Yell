import { MutationOptions, useQueryClient } from "@tanstack/react-query";
import {
  createScenario,
  deleteScenario,
  updateScenarioName,
} from "@/app/api/scenario-api";

export const updateScenarioNameMutationOptions = (
  queryClient: ReturnType<typeof useQueryClient>
): MutationOptions<void, Error, { id: string; name: string }> => ({
  mutationFn: updateScenarioName,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["scenarioName"] });
  },
});

export const deleteScenarioMutationOptions = (
  queryClient: ReturnType<typeof useQueryClient>
): MutationOptions<void, Error, string> => ({
  mutationFn: deleteScenario,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["scenarioName"] });
  },
});

export const createScenarioMutationOptions = (
  queryClient: ReturnType<typeof useQueryClient>
): MutationOptions<void, Error, string> => ({
  mutationFn: createScenario,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["scenarioName"] });
  },
});
