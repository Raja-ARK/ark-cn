import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const FieldNumberInputNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Age</FieldLabel>
    <NumberFieldRoot min={18} max={100} defaultValue="24">
      <NumberFieldInput />
    </NumberFieldRoot>
    <FieldDescription>Age must be between 18 and 100.</FieldDescription>
  </Field>
);

export default FieldNumberInputNormalDemo;
