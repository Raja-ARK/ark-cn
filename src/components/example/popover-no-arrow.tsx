import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverNoArrowDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        No arrow
      </Button>
    </PopoverTrigger>
    <PopoverPopup showArrow={false}>
      <PopoverTitle>No arrow</PopoverTitle>
      <PopoverDescription>
        Pass <code className="text-foreground">showArrow=false</code> to{" "}
        <code className="text-foreground">PopoverPopup</code>.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverNoArrowDemo;
