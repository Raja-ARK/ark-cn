import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputSeparated = () => (
  <PinInputRoot
    aria-label="Verification code"
    count={6}
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Separated (default)</PinInputLabel>
    <PinInputSlots separatorBetweenCount={3} variant="separated" />
  </PinInputRoot>
);

export default PinInputSeparated;
