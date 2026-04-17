import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";

const SwitchDisabledDemo = () => (
  <SwitchRoot disabled>
    <Switch />
    <SwitchLabel>Label</SwitchLabel>
  </SwitchRoot>
);

export default SwitchDisabledDemo;
