import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu";

const MenuNestedDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Nested
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="one">
        <MenuItemText>Item one</MenuItemText>
      </MenuItem>
      <Menu>
        <MenuTriggerItem>
          <MenuItemText>More</MenuItemText>
          <ChevronRightIcon
            aria-hidden
            className="size-4 shrink-0 opacity-60"
          />
        </MenuTriggerItem>
        <MenuPopup>
          <MenuItem value="sub-a">
            <MenuItemText>Sub item A</MenuItemText>
          </MenuItem>
          <MenuItem value="sub-b">
            <MenuItemText>Sub item B</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </Menu>
      <MenuItem value="two">
        <MenuItemText>Item two</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuNestedDemo;
