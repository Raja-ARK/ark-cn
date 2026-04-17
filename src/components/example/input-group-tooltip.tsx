import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const InputGroupTooltip = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Password"
        placeholder="Password"
        type="password"
      />
      <InputGroupAddon align="inline-end">
        <Tooltip positioning={{ placement: "top" }}>
          <TooltipTrigger asChild>
            <Button
              aria-label="Password requirements"
              size="icon-xs"
              variant="ghost"
            >
              <InfoIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipPopup>
            <p>Min. 8 characters</p>
          </TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupTooltip;
