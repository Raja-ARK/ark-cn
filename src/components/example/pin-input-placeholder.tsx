import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputPlaceholder = () => (
  <PinInputRoot
    count={4}
    placeholder="-"
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Custom placeholder</PinInputLabel>
    <PinInputSlots variant="separated" />
  </PinInputRoot>
);

export default PinInputPlaceholder;
