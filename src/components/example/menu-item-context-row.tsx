import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuIndicator,
  MenuItem,
  MenuItemContext,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuItemContextRowDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Settings
        <MenuIndicator>
          <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
        </MenuIndicator>
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="profile">
        <MenuItemContext>
          {(item) => (
            <span
              className={
                item.highlighted ? "text-foreground" : "text-muted-foreground"
              }
            >
              Profile Settings
            </span>
          )}
        </MenuItemContext>
      </MenuItem>
      <MenuItem value="preferences">
        <MenuItemText>Preferences</MenuItemText>
      </MenuItem>
      <MenuItem value="notifications">
        <MenuItemText>Notifications</MenuItemText>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="logout">
        <MenuItemText>Log out</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuItemContextRowDemo;
