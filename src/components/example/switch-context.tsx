import {
  Switch,
  SwitchContext,
  SwitchLabel,
  SwitchRoot,
} from "@/components/ui/switch";

const SwitchContextDemo = () => (
  <SwitchRoot>
    <Switch />
    <SwitchContext>
      {(ctx) => (
        <SwitchLabel>
          Feature is {ctx.checked ? "enabled" : "disabled"}
        </SwitchLabel>
      )}
    </SwitchContext>
  </SwitchRoot>
);

export default SwitchContextDemo;
