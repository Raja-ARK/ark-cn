import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuInDialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Open dialog with menu
      </Button>
    </DialogTrigger>
    <DialogPopup className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Menu inside dialog</DialogTitle>
        <DialogDescription>
          Menu uses lazyMount and unmountOnExit so layers clean up when the
          dialog closes.
        </DialogDescription>
      </DialogHeader>
      <DialogPanel className="flex justify-start">
        <Menu lazyMount unmountOnExit>
          <MenuTrigger asChild>
            <Button size="sm" type="button" variant="outline">
              Actions
            </Button>
          </MenuTrigger>
          <MenuPopup>
            <MenuItem value="edit">
              <MenuItemText>Edit</MenuItemText>
            </MenuItem>
            <MenuItem value="duplicate">
              <MenuItemText>Duplicate</MenuItemText>
            </MenuItem>
            <MenuSeparator />
            <MenuItem value="delete">
              <MenuItemText>Delete</MenuItemText>
            </MenuItem>
          </MenuPopup>
        </Menu>
      </DialogPanel>
      <DialogFooter>
        <DialogClose asChild>
          <Button size="sm" type="button" variant="ghost">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogPopup>
  </Dialog>
);

export default MenuInDialogDemo;
