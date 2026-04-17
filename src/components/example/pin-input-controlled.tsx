import { useState } from "react";
import {
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputControlled = () => {
  const [value, setValue] = useState<string[]>(["", "", "", "", "", ""]);
  const [complete, setComplete] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md grid place-content-center gap-2">
      <PinInputRoot
        count={6}
        onValueChange={(details) => {
          setValue(details.value);
          setComplete(null);
        }}
        onValueComplete={(details) => setComplete(details.valueAsString)}
        value={value}
        className="w-full max-w-md grid justify-center"
      >
        <PinInputLabel>Controlled</PinInputLabel>
        <PinInputSlots variant="separated" />
      </PinInputRoot>
      <p className="text-muted-foreground text-xs">
        Value:{" "}
        <span className="font-mono text-foreground">
          {value.join("") || "-"}
        </span>
        {complete ? (
          <>
            {" "}
            - complete:{" "}
            <span className="font-medium text-foreground">{complete}</span>
          </>
        ) : null}
      </p>
    </div>
  );
};

export default PinInputControlled;
