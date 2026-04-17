import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const FieldRadioGroupNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Plan</FieldLabel>
    <RadioGroup defaultValue="pro">
      <Radio value="starter">Starter</Radio>
      <Radio value="pro">Pro</Radio>
      <Radio value="enterprise">Enterprise</Radio>
    </RadioGroup>
    <FieldDescription>
      Select the billing plan that fits your needs.
    </FieldDescription>
  </Field>
);

export default FieldRadioGroupNormalDemo;
