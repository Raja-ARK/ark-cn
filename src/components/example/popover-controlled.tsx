import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={() => setOpen((o) => !o)}
        size="sm"
        type="button"
        variant="outline"
      >
        Toggle from outside
      </Button>
      <Popover onOpenChange={(d) => setOpen(d.open)} open={open}>
        <PopoverTrigger asChild>
          <Button type="button" variant="outline">
            Controlled trigger
          </Button>
        </PopoverTrigger>
        <PopoverPopup>
          <PopoverTitle>Open is synced</PopoverTitle>
          <PopoverDescription>
            <span className="font-medium text-foreground">{String(open)}</span>
          </PopoverDescription>
        </PopoverPopup>
      </Popover>
    </div>
  );
};

export default PopoverControlledDemo;
