import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuItemIndicator,
  MenuItemText,
  MenuPopup,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuRadioDemo = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button size="sm" type="button" variant="outline">
          Theme
        </Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuRadioItemGroup
          defaultValue="system"
          value={theme}
          onValueChange={(details) => setTheme(details.value)}
        >
          <MenuRadioItem value="light">
            <MenuItemText>Light</MenuItemText>
            <MenuItemIndicator>
              <span className="block size-2 rounded-full bg-current" />
            </MenuItemIndicator>
          </MenuRadioItem>
          <MenuRadioItem value="dark">
            <MenuItemText>Dark</MenuItemText>
            <MenuItemIndicator>
              <span className="block size-2 rounded-full bg-current" />
            </MenuItemIndicator>
          </MenuRadioItem>
          <MenuRadioItem value="system">
            <MenuItemText>System</MenuItemText>
            <MenuItemIndicator>
              <span className="block size-2 rounded-full bg-current" />
            </MenuItemIndicator>
          </MenuRadioItem>
        </MenuRadioItemGroup>
      </MenuPopup>
    </Menu>
  );
};

export default MenuRadioDemo;
