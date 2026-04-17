import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipDelayDemo = () => (
  <Tooltip closeDelay={0} openDelay={0}>
    <TooltipTrigger>
      <Button variant="outline">Instant tooltip</Button>
    </TooltipTrigger>
    <TooltipPopup>No open/close delay</TooltipPopup>
  </Tooltip>
);

export default TooltipDelayDemo;
