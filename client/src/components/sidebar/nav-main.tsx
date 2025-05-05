import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScenarioItem } from "@/types/item.types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import {
  useDeleteScenarioMutation,
  useUpdateScenarioNameMutation,
} from "@/app/api/scenarioApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "../ui/input";

const NavMain = ({ scenarios }: { scenarios: ScenarioItem[] }) => {
  const [useDelete] = useDeleteScenarioMutation();
  const [useRename] = useUpdateScenarioNameMutation();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>("");

  const handleDelete = async (id: string) => {
    try {
      await useDelete({ id });
    } catch (err) {
      console.error("Delete scenario error:", err);
    }
  };

  const handleRename = async (id: string, name: string) => {
    try {
      await useRename({
        id,
        name: name,
      });
      setEditingId(null);
    } catch (err) {
      console.error("Rename scenario error:", err);
    }
  };

  const toggleEditMode = (id: string, name: string) => {
    setEditingId(id);
    setNewName(name);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>SCENARIOS</SidebarGroupLabel>
      <SidebarMenu>
        {scenarios.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton isActive={item.isActive} asChild>
              {editingId === item.id ? (
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleRename(item.id, newName);
                    }
                  }}
                  autoFocus
                ></Input>
              ) : (
                <span>{item.name}</span>
              )}
            </SidebarMenuButton>

            <AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction>
                    <MoreHorizontal />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuItem
                    onClick={() => toggleEditMode(item.id, item.name)}
                  >
                    <span>Rename</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <AlertDialogTrigger asChild>
                      <button className="text-red-500 w-full text-left">
                        Delete
                      </button>
                    </AlertDialogTrigger>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your scenario.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDelete(item.id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
