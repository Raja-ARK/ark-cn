import { useState } from "react";

import { ProgressCircular } from "@/components/ui/progress-circular";

const ProgressCircularControlled = () => {
  const [value, setValue] = useState(42);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <ProgressCircular
        onValueChange={(details) => setValue(details.value ?? 0)}
        showCenterValue
        size={120}
        value={value}
      />
      <input
        aria-label="Progress value"
        className="w-full accent-primary"
        max={100}
        min={0}
        onChange={(event) => setValue(Number(event.target.value))}
        type="range"
        value={value}
      />
      <p className="text-muted-foreground text-xs">
        Controlled <span className="font-mono text-foreground">{value}</span>
      </p>
    </div>
  );
};

export default ProgressCircularControlled;
