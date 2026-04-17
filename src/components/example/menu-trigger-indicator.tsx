import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuIndicator,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuTriggerIndicatorDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Options
        <MenuIndicator>
          <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
        </MenuIndicator>
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="alpha">
        <MenuItemText>Alpha</MenuItemText>
      </MenuItem>
      <MenuItem value="beta">
        <MenuItemText>Beta</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuTriggerIndicatorDemo;
