import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearDefault = () => (
  <div className="w-full max-w-md">
    <ProgressLinear defaultValue={50} showValueText />
  </div>
);

export default ProgressLinearDefault;
