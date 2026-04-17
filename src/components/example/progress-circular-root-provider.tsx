import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import {
  ProgressCircularCircle,
  ProgressCircularLabel,
  ProgressCircularRootProvider as ProgressCircularProvider,
  ProgressCircularRange,
  ProgressCircularTrack,
  ProgressCircularValueText,
  useProgress,
} from "@/components/ui/progress-circular";

const ProgressCircularRootProviderDemo = () => {
  const store = useProgress({ defaultValue: 36 });

  return (
    <ProgressCircularProvider
      className="max-w-xs"
      style={
        {
          "--size": "112px",
          "--thickness": "8px",
        } as CSSProperties
      }
      value={store}
    >
      <p className="text-muted-foreground text-xs">
        useProgress + RootProvider value{" "}
        <span className="font-medium text-foreground tabular-nums">
          {store.value ?? "-"}
        </span>
      </p>
      <ProgressCircularLabel>External control</ProgressCircularLabel>
      <div className="relative inline-flex">
        <ProgressCircularCircle className="text-primary [--thickness:8px] [--size:112px]">
          <ProgressCircularTrack />
          <ProgressCircularRange />
        </ProgressCircularCircle>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <ProgressCircularValueText className="font-semibold text-[0.9rem] tabular-nums" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() => store.setValue(Math.max(0, (store.value ?? 0) - 15))}
          size="sm"
          type="button"
          variant="outline"
        >
          -15
        </Button>
        <Button
          onClick={() => store.setValue(Math.min(100, (store.value ?? 0) + 15))}
          size="sm"
          type="button"
          variant="outline"
        >
          +15
        </Button>
        <Button
          onClick={() => store.setToMin()}
          size="sm"
          type="button"
          variant="secondary"
        >
          Min
        </Button>
        <Button
          onClick={() => store.setToMax()}
          size="sm"
          type="button"
          variant="secondary"
        >
          Max
        </Button>
      </div>
    </ProgressCircularProvider>
  );
};

export default ProgressCircularRootProviderDemo;
