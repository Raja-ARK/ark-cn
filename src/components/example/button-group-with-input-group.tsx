import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const ButtonGroupWithInputGroupDemo = () => (
  <InputGroup className="w-full max-w-md">
    <InputGroupAddon>
      <InputGroupText>
        <SearchIcon />
      </InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="With Input Group" />
    <InputGroupAddon align="inline-end">
      <ButtonGroup>
        <Button size="sm" variant="outline">
          Prev
        </Button>
        <ButtonGroupSeparator />
        <Button size="sm" variant="outline">
          Next
        </Button>
      </ButtonGroup>
    </InputGroupAddon>
  </InputGroup>
);

export default ButtonGroupWithInputGroupDemo;
