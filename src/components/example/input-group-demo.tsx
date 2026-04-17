import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputGroupDemo = () => (
  <InputGroup className="w-full max-w-xs">
    <InputGroupInput aria-label="Search" placeholder="Search" type="search" />
    <InputGroupAddon>
      <SearchIcon aria-hidden="true" className="size-4" />
    </InputGroupAddon>
  </InputGroup>
);

export default InputGroupDemo;
