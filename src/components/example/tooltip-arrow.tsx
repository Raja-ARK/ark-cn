import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipArrowDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPopup showArrow>Tooltip with arrow</TooltipPopup>
  </Tooltip>
);

export default TooltipArrowDemo;
