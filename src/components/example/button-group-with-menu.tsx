import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

const ButtonGroupWithMenuDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <ButtonGroup>
        <Button variant="outline">With Menu</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem value="rename">Rename</MenuItem>
      <MenuItem value="duplicate">Duplicate</MenuItem>
      <MenuItem value="archive">Archive</MenuItem>
    </MenuPopup>
  </Menu>
);

export default ButtonGroupWithMenuDemo;
