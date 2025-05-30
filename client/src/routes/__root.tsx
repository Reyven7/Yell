import { getMe } from "@/app/api/auth-api";
import { useAuthStore } from "@/app/stores/auth-store";
import ScenarioHeader from "@/components/scenario/scenario-header";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { User } from "@/types/user.types";
import { useQuery } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect } from "react";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const { setUser } = useAuthStore();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    enabled: !!localStorage.getItem("refreshToken"),
  });

  useEffect(() => {
    if (data) {
      setUser(data as User);
    }
  }, [data, setUser]);

  return (
    <>
      <SidebarProvider>
        <AppSidebar collapsible="icon" />
        <SidebarInset>
          <ScenarioHeader />
          <Outlet />
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools />
    </>
  );
}
