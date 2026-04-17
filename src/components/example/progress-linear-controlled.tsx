import { useState } from "react";
import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearControlled = () => {
  const [value, setValue] = useState(42);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ProgressLinear
        onValueChange={(d) => setValue(d.value ?? 0)}
        showValueText
        value={value}
      />
      <input
        aria-label="Linear progress value"
        className="w-full accent-primary"
        max={100}
        min={0}
        onChange={(e) => setValue(Number(e.target.value))}
        type="range"
        value={value}
      />
    </div>
  );
};

export default ProgressLinearControlled;
