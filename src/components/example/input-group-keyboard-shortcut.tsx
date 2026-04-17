import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

const InputGroupKeyboardShortcut = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput placeholder="Search…" type="search" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupKeyboardShortcut;
