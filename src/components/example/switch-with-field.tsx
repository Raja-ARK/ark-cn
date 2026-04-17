import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";

const SwitchWithFieldDemo = () => (
  <Field className="max-w-sm w-full grid justify-center items-center">
    <SwitchRoot>
      <Switch />
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
    <FieldDescription>Additional Info</FieldDescription>
    <FieldError>Error Info</FieldError>
  </Field>
);

export default SwitchWithFieldDemo;
