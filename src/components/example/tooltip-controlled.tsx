import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        variant="outline"
      >
        Toggle
      </Button>
      <Tooltip open={open} onOpenChange={(details) => setOpen(details.open)}>
        <TooltipTrigger>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipPopup showArrow>Controlled tooltip</TooltipPopup>
      </Tooltip>
    </div>
  );
};

export default TooltipControlledDemo;
