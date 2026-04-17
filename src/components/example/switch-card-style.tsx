import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const SwitchCardStyleDemo = () => (
  <SwitchRoot
    className={cn(
      "w-full max-w-sm items-start justify-between gap-6 rounded-lg border border-border p-3",
      "hover:bg-accent/40",
      "has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent/40",
    )}
  >
    <div className="flex flex-col gap-1">
      <SwitchLabel className="font-medium">Enable notifications</SwitchLabel>
      <span className="text-muted-foreground text-xs">
        You can enable or disable notifications at any time.
      </span>
    </div>
    <Switch className="mt-0.5" />
  </SwitchRoot>
);

export default SwitchCardStyleDemo;
