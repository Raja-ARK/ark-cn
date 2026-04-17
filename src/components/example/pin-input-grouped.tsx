import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputGrouped = () => (
  <PinInputRoot
    aria-label="Verification code"
    count={6}
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Grouped</PinInputLabel>
    <PinInputSlots variant="grouped" />
  </PinInputRoot>
);

export default PinInputGrouped;
