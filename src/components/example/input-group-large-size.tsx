import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputGroupLargeSize = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Search"
        placeholder="Search"
        size="lg"
        type="search"
      />
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" className="size-5" />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupLargeSize;
