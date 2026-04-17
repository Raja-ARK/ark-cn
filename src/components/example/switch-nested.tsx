import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";

const SwitchNestedDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border p-3">
    <SwitchRoot className="justify-between">
      <SwitchLabel className="font-medium">Notifications</SwitchLabel>
      <Switch />
    </SwitchRoot>
    <div className="ms-3 border-border border-s ps-3">
      <SwitchRoot className="justify-between">
        <SwitchLabel className="text-muted-foreground text-sm">
          Email updates
        </SwitchLabel>
        <Switch />
      </SwitchRoot>
    </div>
  </div>
);

export default SwitchNestedDemo;
