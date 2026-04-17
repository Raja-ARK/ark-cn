import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverInitialFocusDemo = () => {
  const secondRef = useRef<HTMLButtonElement>(null);

  return (
    <Popover initialFocusEl={() => secondRef.current}>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          Initial focus
        </Button>
      </PopoverTrigger>
      <PopoverPopup>
        <PopoverTitle>Focus target</PopoverTitle>
        <PopoverDescription>
          Second button receives focus when opened.
        </PopoverDescription>
        <div className="mt-3 flex gap-2">
          <Button size="sm" type="button" variant="outline">
            First
          </Button>
          <Button ref={secondRef} size="sm" type="button" variant="secondary">
            Second (focused)
          </Button>
        </div>
      </PopoverPopup>
    </Popover>
  );
};

export default PopoverInitialFocusDemo;
