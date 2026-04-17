import { MailIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputGroupEndIcon = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput aria-label="Email" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <MailIcon aria-hidden="true" className="size-4" />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupEndIcon;
