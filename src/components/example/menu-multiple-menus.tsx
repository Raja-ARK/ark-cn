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

const FILE_MENU_ITEMS = [
  { label: "New File", value: "new" },
  { label: "Open...", value: "open" },
  { label: "Save", value: "save" },
] as const;

const EDIT_MENU_ITEMS = [
  { label: "Undo", value: "undo" },
  { label: "Redo", value: "redo" },
  { label: "Cut", value: "cut" },
  { label: "Copy", value: "copy" },
] as const;

const MenuMultipleMenusDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Menu id="showcase-file">
      <MenuTrigger asChild>
        <Button size="sm" type="button" variant="outline">
          File
          <MenuIndicator>
            <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
          </MenuIndicator>
        </Button>
      </MenuTrigger>
      <MenuPopup>
        {FILE_MENU_ITEMS.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <MenuItemText>{item.label}</MenuItemText>
          </MenuItem>
        ))}
      </MenuPopup>
    </Menu>
    <Menu id="showcase-edit">
      <MenuTrigger asChild>
        <Button size="sm" type="button" variant="outline">
          Edit
          <MenuIndicator>
            <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
          </MenuIndicator>
        </Button>
      </MenuTrigger>
      <MenuPopup>
        {EDIT_MENU_ITEMS.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <MenuItemText>{item.label}</MenuItemText>
          </MenuItem>
        ))}
      </MenuPopup>
    </Menu>
  </div>
);

export default MenuMultipleMenusDemo;
