import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputGroupedThreeThree = () => (
  <PinInputRoot
    aria-label="Verification code"
    count={6}
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Grouped 3-3</PinInputLabel>
    <PinInputSlots separatorBetweenCount={3} variant="grouped" />
  </PinInputRoot>
);

export default PinInputGroupedThreeThree;
