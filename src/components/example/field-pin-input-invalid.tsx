import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { PinInputRoot, PinInputSlots } from "@/components/ui/pin-input";

const FieldPinInputInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Verification code</FieldLabel>
    <PinInputRoot count={6} type="numeric">
      <PinInputSlots variant="grouped" separatorBetweenCount={3} />
    </PinInputRoot>
    <FieldError>Enter all 4 digits to continue.</FieldError>
  </Field>
);

export default FieldPinInputInvalidDemo;
