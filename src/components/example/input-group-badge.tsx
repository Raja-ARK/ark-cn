import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputGroupBadge = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput placeholder="Type to search…" type="search" />
      <InputGroupAddon align="inline-end">
        <Badge variant="info">Badge</Badge>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupBadge;
