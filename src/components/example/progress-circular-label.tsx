import { ProgressCircular } from "@/components/ui/progress-circular";

const ProgressCircularLabel = () => (
  <ProgressCircular
    label="Uploading files"
    showCenterValue
    size={112}
    value={72}
    variant="labeled"
  />
);

export default ProgressCircularLabel;
