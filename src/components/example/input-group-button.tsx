import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputGroupButton = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput placeholder="Type to search…" type="search" />
      <InputGroupAddon align="inline-end">
        <Button size="xs" variant="secondary">
          Search
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupButton;
