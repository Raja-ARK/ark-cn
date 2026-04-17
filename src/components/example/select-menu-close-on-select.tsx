import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuCloseOnSelectDemo = () => (
  <Menu closeOnSelect>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        closeOnSelect (default)
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="a">
        <MenuItemText>Closes menu</MenuItemText>
      </MenuItem>
      <MenuItem closeOnSelect={false} value="b">
        <MenuItemText>Stays open</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuCloseOnSelectDemo;
