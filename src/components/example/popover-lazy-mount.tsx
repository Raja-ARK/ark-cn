import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverLazyMountDemo = () => (
  <Popover lazyMount unmountOnExit>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Lazy mount
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Lazy mount</PopoverTitle>
      <PopoverDescription>
        Content mounts on first open and unmounts on close when{" "}
        <code className="text-foreground">unmountOnExit</code> is set.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverLazyMountDemo;
