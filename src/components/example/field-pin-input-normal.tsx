import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { PinInputRoot, PinInputSlots } from "@/components/ui/pin-input";

const FieldPinInputNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Verification code</FieldLabel>
    <PinInputRoot count={6} type="numeric">
      <PinInputSlots variant="grouped" separatorBetweenCount={3} />
    </PinInputRoot>
    <FieldDescription>
      Enter the 6-digit code sent to your email.
    </FieldDescription>
  </Field>
);

export default FieldPinInputNormalDemo;
