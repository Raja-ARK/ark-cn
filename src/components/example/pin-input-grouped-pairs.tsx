import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputGroupedPairs = () => (
  <PinInputRoot
    aria-label="Verification code"
    count={6}
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Pairs 2-2-2</PinInputLabel>
    <PinInputSlots separatorBetweenCount={2} variant="grouped" />
  </PinInputRoot>
);

export default PinInputGroupedPairs;
