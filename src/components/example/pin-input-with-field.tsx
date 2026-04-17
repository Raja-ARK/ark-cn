import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { PinInputRoot, PinInputSlots } from "@/components/ui/pin-input";

const PinInputWithField = () => (
  <Field className="max-w-md grid justify-center">
    <FieldLabel>Code</FieldLabel>
    <PinInputRoot count={6} className="w-full max-w-md">
      <PinInputSlots variant="separated" />
    </PinInputRoot>
    <FieldDescription>
      Field wires disabled/invalid/required into Ark Field context for the pin
      root.
    </FieldDescription>
  </Field>
);

export default PinInputWithField;
