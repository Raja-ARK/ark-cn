import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  Popover,
  PopoverAnchor,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const ButtonGroupWithPopupDemo = () => (
  <Popover>
    <PopoverAnchor>
      <ButtonGroup>
        <Button variant="outline">With Popup</Button>
        <ButtonGroupSeparator />
        <PopoverTrigger asChild>
          <Button variant="outline">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
      </ButtonGroup>
    </PopoverAnchor>
    <PopoverPopup className="space-y-1">
      <PopoverTitle>Popup Actions</PopoverTitle>
      <PopoverDescription>
        Quick actions in a grouped trigger.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default ButtonGroupWithPopupDemo;
