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
import { useState } from "react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createScenarioMutationOptions } from "@/app/mutationOptions/scenarioMutationOptions";

const ScenarioCreateDialog = () => {
  const queryClirnt = useQueryClient();
  const {
    mutateAsync: create,
    isPending,
    isError,
  } = useMutation(createScenarioMutationOptions(queryClirnt));
  
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleScenarioCreate = async () => {
    if (!name.trim()) return;

    try {
      await create(name);
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
          <Button onClick={handleScenarioCreate} disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScenarioCreateDialog;
