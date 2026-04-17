import { useState } from "react";
import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";

const SwitchControlledDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <SwitchRoot
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch />
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
  );
};

export default SwitchControlledDemo;
