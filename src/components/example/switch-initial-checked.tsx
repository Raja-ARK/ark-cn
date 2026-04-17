import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";

const SwitchInitialCheckedDemo = () => (
  <SwitchRoot defaultChecked>
    <Switch />
    <SwitchLabel>Label</SwitchLabel>
  </SwitchRoot>
);

export default SwitchInitialCheckedDemo;
