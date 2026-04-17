import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverNestedDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Nested
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Outer</PopoverTitle>
      <PopoverDescription>Open the inner popover from here.</PopoverDescription>
      <Popover
        lazyMount
        positioning={{ gutter: 8, placement: "right-start" }}
        unmountOnExit
      >
        <PopoverTrigger asChild className="mt-3">
          <Button size="sm" type="button" variant="secondary">
            Advanced
          </Button>
        </PopoverTrigger>
        <PopoverPopup>
          <PopoverTitle>Inner</PopoverTitle>
          <PopoverDescription>
            Nested popovers keep separate open state and layering.
          </PopoverDescription>
        </PopoverPopup>
      </Popover>
    </PopoverPopup>
  </Popover>
);

export default PopoverNestedDemo;
