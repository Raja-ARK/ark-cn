import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverCloseTrigger,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverCloseBehaviorDemo = () => (
  <Popover closeOnEscape={false} closeOnInteractOutside={false}>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Stays open
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Custom dismiss</PopoverTitle>
      <PopoverDescription>
        Outside click and Escape are disabled - use the button to close.
      </PopoverDescription>
      <PopoverCloseTrigger asChild className="mt-3">
        <Button size="sm" type="button" variant="secondary">
          Close popover
        </Button>
      </PopoverCloseTrigger>
    </PopoverPopup>
  </Popover>
);

export default PopoverCloseBehaviorDemo;
