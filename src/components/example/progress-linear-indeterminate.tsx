import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearIndeterminate = () => (
  <div className="w-full max-w-md">
    <ProgressLinear label="Loading" value={null} />
  </div>
);

export default ProgressLinearIndeterminate;
