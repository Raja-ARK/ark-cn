import { ProgressCircular } from "@/components/ui/progress-circular";

const ProgressCircularMinMax = () => (
  <ProgressCircular
    defaultValue={20}
    formatOptions={{ maximumFractionDigits: 0, style: "decimal" }}
    max={30}
    min={10}
    showCenterValue
    size={112}
  />
);

export default ProgressCircularMinMax;
