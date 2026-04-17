import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverPlacementDemo = () => (
  <Popover positioning={{ gutter: 12, placement: "right" }}>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Opens to the right
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Placement</PopoverTitle>
      <PopoverDescription>
        Root <code className="text-foreground">positioning.placement</code> is
        set to <code className="text-foreground">right</code>.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverPlacementDemo;
