import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverSameWidthDemo = () => (
  <Popover positioning={{ sameWidth: true }}>
    <PopoverTrigger asChild>
      <Button className="w-56 justify-center" type="button" variant="outline">
        Same width as trigger
      </Button>
    </PopoverTrigger>
    <PopoverPopup className="w-(--reference-width)! max-w-none! min-w-0 p-3">
      <PopoverTitle className="text-xs">Same width</PopoverTitle>
      <PopoverDescription className="text-xs">
        <code className="text-foreground">positioning.sameWidth</code> on Root.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverSameWidthDemo;
