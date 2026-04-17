import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Switch, SwitchRoot } from "@/components/ui/switch";

const FieldSwitchInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <SwitchRoot invalid>
      <Switch />
      <FieldLabel>Accept terms</FieldLabel>
    </SwitchRoot>
    <FieldError>You must accept the terms to continue.</FieldError>
  </Field>
);

export default FieldSwitchInvalidDemo;
