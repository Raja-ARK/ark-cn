import { ProgressCircular } from "@/components/ui/progress-circular";

const ProgressCircularRow = () => (
  <ProgressCircular
    label="Storage"
    showCenterValue
    size={96}
    thickness={7}
    value={55}
    variant="row"
  />
);

export default ProgressCircularRow;
