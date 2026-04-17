import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipBasicDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPopup>I am a tooltip.</TooltipPopup>
  </Tooltip>
);

export default TooltipBasicDemo;
