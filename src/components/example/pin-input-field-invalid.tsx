import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { PinInputRoot, PinInputSlots } from "@/components/ui/pin-input";

const PinInputFieldInvalid = () => (
  <Field className="max-w-md grid justify-center" invalid>
    <FieldLabel>Invalid</FieldLabel>
    <PinInputRoot count={4} invalid>
      <PinInputSlots variant="separated" />
    </PinInputRoot>
    <FieldError>Code does not match the expected pattern.</FieldError>
  </Field>
);

export default PinInputFieldInvalid;
