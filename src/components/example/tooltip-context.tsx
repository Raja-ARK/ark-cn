import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContext,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipContextDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPopup>
      <TooltipContext>
        {(api) => `Tooltip open: ${String(api.open)}`}
      </TooltipContext>
    </TooltipPopup>
  </Tooltip>
);

export default TooltipContextDemo;
