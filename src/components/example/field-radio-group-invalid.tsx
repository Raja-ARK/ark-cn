import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const FieldRadioGroupInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Billing cycle</FieldLabel>
    <RadioGroup invalid>
      <Radio value="monthly">Monthly</Radio>
      <Radio value="yearly">Yearly</Radio>
    </RadioGroup>
    <FieldError>Please choose a billing cycle.</FieldError>
  </Field>
);

export default FieldRadioGroupInvalidDemo;
