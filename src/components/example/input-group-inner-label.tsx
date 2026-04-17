import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

const InputGroupInnerLabel = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput id="email-1" placeholder="team@coss.com" type="email" />
      <InputGroupAddon align="block-start">
        <Label className="text-foreground" htmlFor="email-1">
          Email
        </Label>
        <Popover
          positioning={{
            placement: "top",
          }}
        >
          <PopoverTrigger asChild>
            <Button className="-m-1" size="icon-xs" variant="ghost">
              <InfoIcon className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverPopup>
            <p>We&apos;ll use this to send you notifications</p>
          </PopoverPopup>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupInnerLabel;
