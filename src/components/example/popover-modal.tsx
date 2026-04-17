import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverModalDemo = () => (
  <Popover modal>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Modal popover
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Modal layer</PopoverTitle>
      <PopoverDescription>
        Focus is trapped, outside scroll is blocked, and background is inert
        while open.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverModalDemo;
