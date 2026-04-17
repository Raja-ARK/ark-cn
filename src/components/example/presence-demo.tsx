import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Presence } from "@/components/ui/presence";

const PresenceDemo = () => {
  const [present, setPresent] = useState(true);

  return (
    <div className="grid w-full max-w-md gap-4">
      <Button
        type="button"
        variant="outline"
        onClick={() => setPresent((value) => !value)}
      >
        {present ? "Hide panel" : "Show panel"}
      </Button>
      <Presence present={present}>
        <div className="rounded-xl border border-border bg-card p-4 shadow-xs transition-all duration-200 data-[state=closed]:translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100">
          <p className="font-medium text-sm">
            Presence keeps exit state visible.
          </p>
          <p className="mt-1 text-muted-foreground text-sm">
            Toggle the panel to preview enter and exit transitions without
            wiring a full overlay component.
          </p>
        </div>
      </Presence>
    </div>
  );
};

export default PresenceDemo;
