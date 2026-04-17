import {
  ProgressLinearRange,
  ProgressLinearRoot,
  ProgressLinearTrack,
  ProgressLinearView,
} from "@/components/ui/progress-linear";

const ProgressLinearViewDemo = () => (
  <ProgressLinearRoot className="max-w-md" defaultValue={75}>
    <div className="flex min-h-10 flex-col gap-1">
      <ProgressLinearView state="loading">
        <p className="text-muted-foreground text-xs">Still working...</p>
      </ProgressLinearView>
      <ProgressLinearView state="complete">
        <p className="text-emerald-600 text-xs">Finished</p>
      </ProgressLinearView>
      <ProgressLinearView state="indeterminate">
        <p className="text-muted-foreground text-xs">Indeterminate</p>
      </ProgressLinearView>
    </div>
    <ProgressLinearTrack className="mt-1 h-2">
      <ProgressLinearRange />
    </ProgressLinearTrack>
  </ProgressLinearRoot>
);

export default ProgressLinearViewDemo;
