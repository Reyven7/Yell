import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { DiamondPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SidebarMenuButton } from "../ui/sidebar";
import { useCreateScenarioMutation } from "@/app/api/scenarioApi";
import { useState } from "react";
import { toast } from "sonner";

const ScenarioCreateDialog = () => {
  const [createScenario, { isLoading, isError }] = useCreateScenarioMutation();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleScenarioCreate = async () => {
    if (!name.trim()) return;

    try {
      await createScenario({ name: name }).unwrap();
      setName("");
      setOpen(false);
    } catch (err) {
      console.error("Failed to create scenario", err);
    }
  };

  if (isError) {
    toast("Failed");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarMenuButton>
          <DiamondPlus />
          <span>New scenario</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create scenario</DialogTitle>
          <DialogDescription>You can change the name later.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="name" className="sr-only">
              Name
            </Label>
            <Input
              id="name"
              placeholder="New scenario"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleScenarioCreate} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScenarioCreateDialog;
