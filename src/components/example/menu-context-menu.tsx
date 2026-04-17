import {
  Menu,
  MenuContextTrigger,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
} from "@/components/ui/menu";

const MenuContextMenuDemo = () => (
  <Menu>
    <MenuContextTrigger className="w-full max-w-xs rounded-lg border border-dashed border-border p-6 text-center text-muted-foreground text-sm">
      Right-click or long-press here
    </MenuContextTrigger>
    <MenuPopup>
      <MenuItem value="back">
        <MenuItemText>Back</MenuItemText>
      </MenuItem>
      <MenuItem value="forward">
        <MenuItemText>Forward</MenuItemText>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="reload">
        <MenuItemText>Reload</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuContextMenuDemo;
