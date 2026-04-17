import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuBasicDemo = () => {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2">
      <output className="text-muted-foreground text-xs">
        Last: {last ?? "—"}
      </output>
      <Menu
        onSelect={(d) => {
          setLast(d.value);
        }}
      >
        <MenuTrigger asChild>
          <Button size="sm" type="button" variant="outline">
            Open menu
          </Button>
        </MenuTrigger>
        <MenuPopup>
          <MenuItem value="new">
            <MenuItemText>New file</MenuItemText>
          </MenuItem>
          <MenuItem value="copy">
            <MenuItemText>Copy</MenuItemText>
          </MenuItem>
          <MenuItem value="paste">
            <MenuItemText>Paste</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </Menu>
    </div>
  );
};

export default MenuBasicDemo;
