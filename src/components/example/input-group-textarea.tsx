import { ArrowUpIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const InputGroupTextareaDemo = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupTextarea placeholder="Ask, Search or Chat…" />
      <InputGroupAddon align="block-end">
        <Menu>
          <Tooltip>
            <TooltipTrigger>
              <MenuTrigger asChild>
                <Button
                  aria-label="Add files"
                  className="rounded-full"
                  size="icon-sm"
                  variant="ghost"
                >
                  <PlusIcon className="size-4" />
                </Button>
              </MenuTrigger>
            </TooltipTrigger>
            <TooltipPopup>Add files and more</TooltipPopup>
          </Tooltip>
          <MenuPopup>
            <MenuItem value="add-photos-and-files">
              Add photos &amp; files
            </MenuItem>
            <MenuItem value="create-image">Create image</MenuItem>
            <MenuItem value="thinking">Thinking</MenuItem>
            <MenuItem value="deep-research">Deep research</MenuItem>
          </MenuPopup>
        </Menu>
        <InputGroupText className="ml-auto">78% used</InputGroupText>
        <Tooltip>
          <TooltipTrigger>
            <Button
              aria-label="Send"
              className="rounded-full"
              size="icon-sm"
              variant="default"
            >
              <ArrowUpIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipPopup>Send</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupTextareaDemo;
