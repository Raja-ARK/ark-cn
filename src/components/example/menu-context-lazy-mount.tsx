import { ChevronRightIcon } from "lucide-react";
import {
  Menu,
  MenuContextTrigger,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
  MenuTriggerItem,
} from "@/components/ui/menu";

const MenuContextLazyMountDemo = () => (
  <Menu lazyMount unmountOnExit>
    <MenuContextTrigger className="flex h-40 w-full max-w-xs items-center justify-center rounded-lg border border-dashed border-border text-muted-foreground text-sm">
      Right-click here
    </MenuContextTrigger>
    <MenuPopup>
      <MenuItem value="cut">
        <MenuItemText>Cut</MenuItemText>
      </MenuItem>
      <MenuItem value="copy">
        <MenuItemText>Copy</MenuItemText>
      </MenuItem>
      <MenuItem value="paste">
        <MenuItemText>Paste</MenuItemText>
      </MenuItem>
      <MenuSeparator />
      <Menu lazyMount unmountOnExit>
        <MenuTriggerItem>
          <MenuItemText>Share</MenuItemText>
          <ChevronRightIcon aria-hidden className="size-4 opacity-60" />
        </MenuTriggerItem>
        <MenuPopup>
          <MenuItem value="email">
            <MenuItemText>Email</MenuItemText>
          </MenuItem>
          <MenuItem value="message">
            <MenuItemText>Message</MenuItemText>
          </MenuItem>
          <MenuItem value="airdrop">
            <MenuItemText>AirDrop</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </Menu>
    </MenuPopup>
  </Menu>
);

export default MenuContextLazyMountDemo;
