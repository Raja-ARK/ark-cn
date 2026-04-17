import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearComplete = () => (
  <div className="w-full max-w-md">
    <ProgressLinear defaultValue={100} label="Complete" showValueText />
  </div>
);

export default ProgressLinearComplete;
