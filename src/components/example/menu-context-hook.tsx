import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuContext,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuContextHookDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        useMenuContext
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuContext>
        {(ctx) => (
          <div className="border-border border-b px-2 py-1.5 text-muted-foreground text-xs">
            open: {String(ctx.open)}
          </div>
        )}
      </MenuContext>
      <MenuItem value="item-1">
        <MenuItemText>Item 1</MenuItemText>
      </MenuItem>
      <MenuItem value="item-2">
        <MenuItemText>Item 2</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuContextHookDemo;
