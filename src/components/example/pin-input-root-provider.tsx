import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PinInputLabel,
  PinInputRootProvider,
  PinInputSlots,
  usePinInput,
} from "@/components/ui/pin-input";

const PinInputRootProviderDemo = () => {
  const [message, setMessage] = useState<string | null>(null);
  const store = usePinInput({
    count: 6,
    onValueComplete: (details) =>
      setMessage(`Complete: ${details.valueAsString}`),
  });

  return (
    <PinInputRootProvider
      className="max-w-md grid place-items-center"
      value={store}
    >
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-xs">
          usePinInput + PinInputRootProvider - focus from outside.
        </p>
        {message ? (
          <p className="font-medium text-foreground text-xs">{message}</p>
        ) : null}
        <PinInputLabel>Programmatic control</PinInputLabel>
        <div className="flex flex-wrap items-center gap-2">
          <PinInputSlots variant="grouped" />
          <Button
            onClick={() => store.focus()}
            size="sm"
            type="button"
            variant="outline"
          >
            Focus
          </Button>
        </div>
      </div>
    </PinInputRootProvider>
  );
};

export default PinInputRootProviderDemo;
