import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverAnchor,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverAnchorDemo = () => (
  <Popover positioning={{ placement: "bottom" }}>
    <div className="flex flex-wrap items-center gap-2">
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverAnchor>
        <Input
          aria-label="Anchor reference"
          className="max-w-48"
          placeholder="Anchor positions to this field"
        />
      </PopoverAnchor>
    </div>
    <PopoverPopup>
      <PopoverTitle>Anchor</PopoverTitle>
      <PopoverDescription>
        Content is positioned relative to the anchor element, not only the
        trigger.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverAnchorDemo;
