import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipWithinFixedDemo = () => (
  <div className="w-full rounded-lg border border-border/70 bg-muted/15 p-3">
    <div className="fixed right-4 bottom-4 z-40 rounded-lg bg-primary/15 p-4 shadow-md">
      <Tooltip positioning={{ strategy: "fixed" }}>
        <TooltipTrigger>
          <Button size="sm" variant="outline">
            Fixed trigger
          </Button>
        </TooltipTrigger>
        <TooltipPopup showArrow>strategy=fixed</TooltipPopup>
      </Tooltip>
    </div>
    <p className="text-muted-foreground text-xs">
      Hover the fixed trigger in the bottom-right viewport corner.
    </p>
  </div>
);

export default TooltipWithinFixedDemo;
