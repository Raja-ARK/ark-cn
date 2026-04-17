import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuIndicator,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

const ACCOUNT_MENU_ITEMS = [
  { label: "My Profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { label: "Billing", value: "billing" },
  { label: "Log out", value: "logout" },
] as const;

const MenuSelectEventDemo = () => {
  const [lines, setLines] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-2">
      <output className="min-h-10 whitespace-pre-wrap text-muted-foreground text-xs">
        {lines.length ? lines.join("\n") : "Pick an item..."}
      </output>
      <Menu
        onSelect={(event) => {
          setLines((previous) =>
            [`root onSelect: ${event.value}`, ...previous].slice(0, 5),
          );
        }}
      >
        <MenuTrigger asChild>
          <Button size="sm" type="button" variant="outline">
            Account
            <MenuIndicator>
              <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
            </MenuIndicator>
          </Button>
        </MenuTrigger>
        <MenuPopup>
          {ACCOUNT_MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              onSelect={() => {
                setLines((previous) =>
                  [`item onSelect: ${item.label}`, ...previous].slice(0, 5),
                );
              }}
            >
              <MenuItemText>{item.label}</MenuItemText>
            </MenuItem>
          ))}
        </MenuPopup>
      </Menu>
    </div>
  );
};

export default MenuSelectEventDemo;
