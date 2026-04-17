import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipPositioningDemo = () => (
  <Tooltip
    positioning={{
      offset: { crossAxis: 12, mainAxis: 12 },
      placement: "left-start",
    }}
  >
    <TooltipTrigger>
      <Button variant="outline">Left start</Button>
    </TooltipTrigger>
    <TooltipPopup showArrow>Custom offset + placement</TooltipPopup>
  </Tooltip>
);

export default TooltipPositioningDemo;
