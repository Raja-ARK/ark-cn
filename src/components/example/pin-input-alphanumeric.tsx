import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputAlphanumeric = () => (
  <div className="w-full max-w-md grid justify-center">
    <PinInputRoot count={6} type="alphanumeric">
      <PinInputLabel>Alphanumeric</PinInputLabel>
      <PinInputSlots variant="grouped" />
    </PinInputRoot>
  </div>
);

export default PinInputAlphanumeric;
