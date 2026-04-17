import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ClipboardIndicator,
  ClipboardRoot,
  ClipboardTrigger,
} from "@/components/ui/clipboard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const InputGroupIconButton = () => {
  const [value, setValue] = useState("");

  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Url"
        defaultValue="https://ark-ui.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <ClipboardRoot value={value}>
            <TooltipTrigger asChild>
              <ClipboardTrigger asChild>
                <Button aria-label="Copy" size="icon-xs" variant="ghost">
                  <ClipboardIndicator copied={<CheckIcon className="size-4" />}>
                    <CopyIcon className="size-4" />
                  </ClipboardIndicator>
                </Button>
              </ClipboardTrigger>
            </TooltipTrigger>
          </ClipboardRoot>
          <TooltipPopup>
            <p>Copy to clipboard</p>
          </TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupIconButton;
