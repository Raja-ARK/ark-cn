import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputOtp = () => (
  <div className="w-full max-w-md grid justify-center">
    <PinInputRoot count={6} otp className="w-full max-w-md grid justify-center">
      <PinInputLabel>OTP (autocomplete)</PinInputLabel>
      <PinInputSlots variant="grouped" />
    </PinInputRoot>
    <p className="mt-2 text-muted-foreground text-xs">
      Sets one-time-code autocomplete on fields.
    </p>
  </div>
);

export default PinInputOtp;
