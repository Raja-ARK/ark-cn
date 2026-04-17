import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputFourDigits = () => (
  <div className="w-full max-w-xs grid justify-center">
    <PinInputRoot count={4}>
      <PinInputLabel>Four digits</PinInputLabel>
      <PinInputSlots variant="grouped" />
    </PinInputRoot>
  </div>
);

export default PinInputFourDigits;
