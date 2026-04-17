import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuBasicDemo = () => {
  return (
    <Menu>
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
  );
};

export default MenuBasicDemo;
