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
import NavMain from "./nav-main";
import { NavUser } from "./nav-user";
import { useAuth } from "@/hooks/use-auth";
import { NavLink } from "react-router-dom";
import ScenarioCreateDialog from "../scenario/scenario-create-dialog";
import { useGetNameOfScenariosQuery } from "@/app/api/scenarioApi";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const { isAuthenticated } = useAuth();
  const { data: nameOfScenarios } = useGetNameOfScenariosQuery(undefined, {
    skip: !isAuthenticated,
  });

  return (
    <Sidebar {...props} className="overflow-x-hidden">
      <SidebarHeader>
        {isAuthenticated ? (
          <NavUser />
        ) : (
          <>
            <NavLink to={"/login"}>
              <SidebarMenuButton>
                <LogInIcon />
                <span>Login</span>
              </SidebarMenuButton>
            </NavLink>
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
        <NavMain scenarios={nameOfScenarios ?? []} />
        <SidebarRail />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
