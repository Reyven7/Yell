import { MoreVertical, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const tabs = [
  { name: "Story", href: "/story" },
  { name: "Notes", href: "/notes" },
  { name: "Moodboard", href: "/moodboard" },
];

const ScenarioHeader = () => {
  return (
    <>
      <nav
        className="flex items-center justify-between"
        aria-label="scenario navigation"
      >
        <div className="flex items-center gap-2 px-2">
          <SidebarTrigger />
        </div>
        <div className="flex-1 flex justify-center gap-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.href}
              end
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  "py-5 text-base font-normal transition-colors border-b-2",
                  isActive
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                )
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 px-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost">
            <MoreVertical />
          </Button>
        </div>
      </nav>
      <Separator />
    </>
  );
};

export default ScenarioHeader;
