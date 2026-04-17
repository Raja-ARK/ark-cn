import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

const placements = [
  { label: "Top", placement: "top" },
  { label: "Right", placement: "right" },
  { label: "Bottom", placement: "bottom" },
  { label: "Left", placement: "left" },
] as const;

const TooltipPlacementsDemo = () => (
  <div className="grid grid-cols-2 gap-3">
    {placements.map((item) => (
      <Tooltip key={item.placement} positioning={{ placement: item.placement }}>
        <TooltipTrigger>
          <Button variant="outline">{item.label}</Button>
        </TooltipTrigger>
        <TooltipPopup showArrow>{item.label} placement</TooltipPopup>
      </Tooltip>
    ))}
  </div>
);

export default TooltipPlacementsDemo;
