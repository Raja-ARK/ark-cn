import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuItemIndicator,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const MenuCheckboxDemo = () => {
  const [showToolbar, setShowToolbar] = useState(true);
  const [showStatusBar, setShowStatusBar] = useState(false);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button size="sm" type="button" variant="outline">
          Checkboxes
        </Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem
          checked={showToolbar}
          onCheckedChange={setShowToolbar}
          value="autosave"
        >
          <MenuItemText>Auto save</MenuItemText>
          <MenuItemIndicator>
            <CheckIcon aria-hidden className="size-4" />
          </MenuItemIndicator>
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          value="notify"
        >
          <MenuItemText>Notifications</MenuItemText>
          <MenuItemIndicator>
            <CheckIcon aria-hidden className="size-4" />
          </MenuItemIndicator>
        </MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  );
};

export default MenuCheckboxDemo;
