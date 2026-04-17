import {
  ProgressLinearLabel,
  ProgressLinearRange,
  ProgressLinearRoot,
  ProgressLinearTrack,
  ProgressLinearValueText,
} from "@/components/ui/progress-linear";

const ProgressLinearComposed = () => (
  <ProgressLinearRoot className="max-w-md" defaultValue={58}>
    <ProgressLinearLabel>Anatomy composition</ProgressLinearLabel>
    <ProgressLinearTrack className="h-2">
      <ProgressLinearRange />
    </ProgressLinearTrack>
    <ProgressLinearValueText className="text-muted-foreground text-xs" />
  </ProgressLinearRoot>
);

export default ProgressLinearComposed;
