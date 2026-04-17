import { Button } from "@/components/ui/button";
import {
  Switch,
  SwitchLabel,
  SwitchRootProvider,
  useSwitch,
} from "@/components/ui/switch";

const SwitchRootProviderDemo = () => {
  const api = useSwitch();

  return (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => api.toggleChecked()} size="sm" variant="outline">
        Toggle
      </Button>

      <SwitchRootProvider
        value={api}
        className="inline-flex items-center gap-2"
      >
        <Switch />
        <SwitchLabel>Label</SwitchLabel>
      </SwitchRootProvider>
    </div>
  );
};

export default SwitchRootProviderDemo;
