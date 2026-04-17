import { useState } from "react";
import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputInvalidEntry = () => {
  const [last, setLast] = useState<string | null>(null);

  return (
    <div className="w-full max-w-xs grid justify-center">
      <PinInputRoot
        count={4}
        onValueInvalid={(details) =>
          setLast(`${details.value} @ ${details.index}`)
        }
        type="numeric"
        className=""
      >
        <PinInputLabel>Digits only</PinInputLabel>
        <PinInputSlots variant="separated" />
      </PinInputRoot>
      <p className="mt-2 text-muted-foreground text-xs">
        Try a letter - onValueInvalid:{" "}
        <span className="font-mono text-foreground">{last ?? "-"}</span>
      </p>
    </div>
  );
};

export default PinInputInvalidEntry;
