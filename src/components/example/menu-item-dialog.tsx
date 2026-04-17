import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuItemDialogDemo = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger asChild>
          <Button size="sm" type="button" variant="outline">
            Danger menu
          </Button>
        </MenuTrigger>
        <MenuPopup>
          <MenuItem value="rename">
            <MenuItemText>Rename</MenuItemText>
          </MenuItem>
          <MenuItem
            closeOnSelect={false}
            value="delete"
            onSelect={() => setConfirmOpen(true)}
          >
            <MenuItemText>Delete...</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </Menu>
      <Dialog
        onOpenChange={(details) => setConfirmOpen(details.open)}
        open={confirmOpen}
      >
        <DialogPopup className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete item?</DialogTitle>
            <DialogDescription>This cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm" type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button
              size="sm"
              type="button"
              variant="destructive"
              onClick={() => setConfirmOpen(false)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogPopup>
      </Dialog>
    </>
  );
};

export default MenuItemDialogDemo;
