import { MoreVertical, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

const tabs = [
  { name: "Story", href: "/scenario/story" },
  { name: "Notes", href: "/scenario/notes" },
  { name: "Moodboard", href: "/scenario/moodboard" },
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
            <Link key={tab.name} to={tab.href}>
              {tab.name}
            </Link>
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
