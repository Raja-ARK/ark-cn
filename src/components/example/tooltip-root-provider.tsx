import { Button } from "@/components/ui/button";
import {
  TooltipPopup,
  TooltipRootProvider,
  TooltipTrigger,
  useTooltip,
} from "@/components/ui/tooltip";

const TooltipRootProviderDemo = () => {
  const tooltip = useTooltip();

  return (
    <div className="flex flex-col items-start gap-2">
      <output className="text-muted-foreground text-xs">
        Open:{" "}
        <span className="font-medium text-foreground">
          {String(tooltip.open)}
        </span>
      </output>
      <TooltipRootProvider value={tooltip}>
        <TooltipTrigger>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipPopup>RootProvider store</TooltipPopup>
      </TooltipRootProvider>
    </div>
  );
};

export default TooltipRootProviderDemo;
