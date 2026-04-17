import {
  ProgressLinearContext,
  ProgressLinearRange,
  ProgressLinearRoot,
  ProgressLinearTrack,
} from "@/components/ui/progress-linear";

const ProgressLinearContextDemo = () => (
  <ProgressLinearRoot className="max-w-md" defaultValue={48}>
    <ProgressLinearContext>
      {(ctx) => (
        <p className="text-muted-foreground text-xs">
          <span className="font-medium text-foreground tabular-nums">
            {ctx.percentAsString || `${Math.round(ctx.percent)}%`}
          </span>
          {" · "}
          {ctx.indeterminate ? "indeterminate" : "determinate"}
        </p>
      )}
    </ProgressLinearContext>
    <ProgressLinearTrack className="h-2">
      <ProgressLinearRange />
    </ProgressLinearTrack>
  </ProgressLinearRoot>
);

export default ProgressLinearContextDemo;
