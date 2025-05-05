import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { Outlet } from "react-router-dom";
import ScenarioHeader from "@/components/scenario/scenario-header";
import { Toaster } from "@/components/ui/sonner";
import { useGetMeQuery } from "@/app/api/authApi";
import { useAuth } from "@/hooks/use-auth";
import Loader from "@/components/loader";
import { useEffect } from "react";

function App() {
  const { saveUser, user: authUser } = useAuth();
  const { data: user, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (user && !authUser) {
      saveUser(user);
    }
  }, [user, authUser, saveUser]);

  if (isLoading) {
    return <Loader message="Loading..." />;
  }

  return (
    <SidebarProvider>
      <AppSidebar collapsible="icon" />
      <SidebarInset>
        <ScenarioHeader />
        <Outlet />
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
