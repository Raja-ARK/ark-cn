import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearSizes = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <ProgressLinear defaultValue={30} label="Small" showValueText size="sm" />
    <ProgressLinear defaultValue={50} label="Medium" showValueText size="md" />
    <ProgressLinear defaultValue={80} label="Large" showValueText size="lg" />
  </div>
);

export default ProgressLinearSizes;
