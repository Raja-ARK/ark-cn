import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

const InputGroupLoading = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput disabled placeholder="Searching…" type="search" />
      <InputGroupAddon align="inline-end">
        <Spinner className="size-4" />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupLoading;
