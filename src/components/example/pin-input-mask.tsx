import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputMask = () => (
  <PinInputRoot count={4} mask className="w-full max-w-xs grid justify-center">
    <PinInputLabel>Masked</PinInputLabel>
    <PinInputSlots variant="separated" />
  </PinInputRoot>
);

export default PinInputMask;
