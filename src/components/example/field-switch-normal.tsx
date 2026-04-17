import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch, SwitchRoot } from "@/components/ui/switch";

const FieldSwitchNormalDemo = () => (
  <Field className="max-w-xs">
    <SwitchRoot defaultChecked>
      <Switch />
      <FieldLabel>Email notifications</FieldLabel>
    </SwitchRoot>
    <FieldDescription>Enable updates for account activity.</FieldDescription>
  </Field>
);

export default FieldSwitchNormalDemo;
