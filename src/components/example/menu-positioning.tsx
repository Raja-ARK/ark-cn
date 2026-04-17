import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuPositioningDemo = () => (
  <Menu positioning={{ placement: "right-start", gutter: 8 }}>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Opens to the right
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="one">
        <MenuItemText>One</MenuItemText>
      </MenuItem>
      <MenuItem value="two">
        <MenuItemText>Two</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuPositioningDemo;
