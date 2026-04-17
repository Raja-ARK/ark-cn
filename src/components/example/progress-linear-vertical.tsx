import {
  ProgressLinearLabel,
  ProgressLinearRange,
  ProgressLinearRoot,
  ProgressLinearTrack,
  ProgressLinearValueText,
} from "@/components/ui/progress-linear";

const ProgressLinearVertical = () => (
  <div className="flex items-end gap-4">
    <ProgressLinearRoot
      className="max-w-40 flex-row items-end gap-3"
      defaultValue={55}
      orientation="vertical"
    >
      <ProgressLinearLabel className="whitespace-nowrap pb-2 text-xs">
        Upload
      </ProgressLinearLabel>
      <ProgressLinearTrack>
        <ProgressLinearRange />
      </ProgressLinearTrack>
      <ProgressLinearValueText className="pb-2 text-muted-foreground text-xs" />
    </ProgressLinearRoot>
  </div>
);

export default ProgressLinearVertical;
