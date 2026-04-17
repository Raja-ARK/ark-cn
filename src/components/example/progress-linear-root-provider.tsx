import { Button } from "@/components/ui/button";
import {
  ProgressLinearLabel,
  ProgressLinearRange,
  ProgressLinearRootProvider as ProgressLinearRootProviderPrimitive,
  ProgressLinearTrack,
  useProgress,
} from "@/components/ui/progress-linear";

const ProgressLinearRootProvider = () => {
  const store = useProgress({ defaultValue: 28 });

  return (
    <ProgressLinearRootProviderPrimitive className="max-w-md" value={store}>
      <p className="text-muted-foreground text-xs">
        useProgress + RootProvider -{" "}
        <span className="font-medium text-foreground tabular-nums">
          {store.value ?? "-"}
        </span>
      </p>
      <ProgressLinearLabel>External control</ProgressLinearLabel>
      <ProgressLinearTrack className="h-2">
        <ProgressLinearRange />
      </ProgressLinearTrack>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => store.setValue(Math.max(0, (store.value ?? 0) - 12))}
          size="sm"
          type="button"
          variant="outline"
        >
          -12
        </Button>
        <Button
          onClick={() => store.setValue(Math.min(100, (store.value ?? 0) + 12))}
          size="sm"
          type="button"
          variant="outline"
        >
          +12
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
    </ProgressLinearRootProviderPrimitive>
  );
};

export default ProgressLinearRootProvider;
