import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuGroupingDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Grouped items
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItemGroup>
        <MenuItemGroupLabel>Account</MenuItemGroupLabel>
        <MenuItem value="profile">
          <MenuItemText>Profile</MenuItemText>
        </MenuItem>
        <MenuItem value="billing">
          <MenuItemText>Billing</MenuItemText>
        </MenuItem>
      </MenuItemGroup>
      <MenuSeparator />
      <MenuItemGroup>
        <MenuItemGroupLabel>Support</MenuItemGroupLabel>
        <MenuItem value="docs">
          <MenuItemText>Docs</MenuItemText>
        </MenuItem>
        <MenuItem value="contact">
          <MenuItemText>Contact</MenuItemText>
        </MenuItem>
      </MenuItemGroup>
    </MenuPopup>
  </Menu>
);

export default MenuGroupingDemo;
