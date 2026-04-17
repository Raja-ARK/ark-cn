import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputReadOnly = () => (
  <div className="w-full max-w-xs grid justify-center">
    <PinInputRoot count={4} defaultValue={["1", "2", "3", "4"]} readOnly>
      <PinInputLabel>Read only</PinInputLabel>
      <PinInputSlots variant="separated" />
    </PinInputRoot>
  </div>
);

export default PinInputReadOnly;
