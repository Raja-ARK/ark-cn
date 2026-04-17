import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

const MenuLinksDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button size="sm" type="button" variant="outline">
        Links
      </Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem asChild value="docs">
        <a href="#menu-docs">Documentation</a>
      </MenuItem>
      <MenuItem asChild value="repo">
        <a href="#menu-repo" rel="noreferrer" target="_blank">
          Repository
        </a>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuLinksDemo;
