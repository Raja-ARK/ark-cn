import { ProgressCircular } from "@/components/ui/progress-circular";

const ProgressCircularThumb = () => (
  <ProgressCircular
    defaultValue={64}
    showCenterValue
    showThumb
    size={128}
    thickness={10}
  />
);

export default ProgressCircularThumb;
