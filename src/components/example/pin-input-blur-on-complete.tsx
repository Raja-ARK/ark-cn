import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputBlurOnComplete = () => (
  <PinInputRoot
    blurOnComplete
    count={4}
    className="w-full max-w-xs grid justify-center"
  >
    <PinInputLabel>Blur when complete</PinInputLabel>
    <PinInputSlots variant="separated" />
  </PinInputRoot>
);

export default PinInputBlurOnComplete;
