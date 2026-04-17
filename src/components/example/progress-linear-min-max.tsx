import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearMinMax = () => (
  <div className="w-full max-w-md">
    <ProgressLinear
      defaultValue={20}
      formatOptions={{ maximumFractionDigits: 0, style: "decimal" }}
      max={30}
      min={10}
      showValueText
    />
  </div>
);

export default ProgressLinearMinMax;
