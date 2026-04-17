import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

const PopoverIndicatorOnlyDemo = () => (
  <Popover positioning={{ placement: "top" }}>
    <PopoverTrigger asChild>
      <Button
        aria-label="Password requirements"
        size="icon-xs"
        type="button"
        variant="ghost"
      >
        <InfoIcon className="size-4" />
      </Button>
    </PopoverTrigger>
    <PopoverPopup className="max-w-xs p-3">
      <p className="text-foreground text-sm">Min. 8 characters.</p>
    </PopoverPopup>
  </Popover>
);

export default PopoverIndicatorOnlyDemo;
