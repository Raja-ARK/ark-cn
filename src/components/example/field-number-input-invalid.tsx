import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const FieldNumberInputInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Seats</FieldLabel>
    <NumberFieldRoot defaultValue="24" invalid min={1}>
      <NumberFieldInput />
    </NumberFieldRoot>
    <FieldError>Please enter at least 1 seat.</FieldError>
  </Field>
);

export default FieldNumberInputInvalidDemo;
