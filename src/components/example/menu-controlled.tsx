import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuControlledDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <Button
        size="sm"
        type="button"
        variant="secondary"
        onClick={() => setOpen((o) => !o)}
      >
        Toggle menu
      </Button>
      <Menu onOpenChange={(d) => setOpen(d.open)} open={open}>
        <MenuTrigger asChild>
          <Button size="sm" type="button" variant="outline">
            Controlled
          </Button>
        </MenuTrigger>
        <MenuPopup>
          <MenuItem value="x">
            <MenuItemText>Close from item</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </Menu>
    </div>
  );
};

export default MenuControlledDemo;
