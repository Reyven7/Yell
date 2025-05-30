import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CreditCard, LogInIcon, Search, User } from "lucide-react";
import { ComponentProps } from "react";
import { NavUser } from "./nav-user";
import ScenarioCreateDialog from "../scenario/scenario-create-dialog";
import { Link } from "@tanstack/react-router";
import { useAuthStore } from "@/app/stores/auth-store";
import NavMain from "./nav-main";
import { useScenarioList } from "@/hooks/use-scenario-list";
import Loader from "@/components/loader";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const state = useAuthStore.getState();
  const isAuthenticated = !!state.user;

  const { scenarios, isLoading } = useScenarioList();

  if (isLoading) {
    <Loader message={""} />;
  }
  return (
    <Sidebar {...props} className="overflow-x-hidden">
      <SidebarHeader>
        {isAuthenticated ? (
          <NavUser />
        ) : (
          <>
            <Link to="/login">
              <SidebarMenuButton>
                <LogInIcon />
                <span>Login</span>
              </SidebarMenuButton>
            </Link>
            <SidebarMenuButton>
              <User />
              <span>Sign Up</span>
            </SidebarMenuButton>
          </>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Search />
                <span>Search</span>
              </SidebarMenuButton>
              <SidebarMenuButton>
                <CreditCard />
                <span>Cards</span>
              </SidebarMenuButton>
              <ScenarioCreateDialog />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator className="m-0" />
        <NavMain scenarios={scenarios ?? []} />
        <SidebarRail />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
