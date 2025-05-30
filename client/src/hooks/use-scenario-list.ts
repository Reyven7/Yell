import { getNameOfScenarios } from "@/app/api/scenario-api";
import { useAuthStore } from "@/app/stores/auth-store";
import { useQuery } from "@tanstack/react-query";

export const useScenarioList = () => {
  const user = useAuthStore((s) => s.user);

  const nameQuery = useQuery({
    queryKey: ["scenarioName"],
    queryFn: getNameOfScenarios,
    enabled: !!user,
  });

  return {
    scenarios: nameQuery.data,
    isLoading: nameQuery.isLoading,
    error: nameQuery.error,
    refetch: nameQuery.refetch,
  };
};
