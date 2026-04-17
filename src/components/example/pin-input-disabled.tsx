import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputDisabled = () => (
  <div className="w-full max-w-xs grid justify-center">
    <PinInputRoot count={4} disabled>
      <PinInputLabel>Disabled</PinInputLabel>
      <PinInputSlots variant="separated" />
    </PinInputRoot>
  </div>
);

export default PinInputDisabled;
