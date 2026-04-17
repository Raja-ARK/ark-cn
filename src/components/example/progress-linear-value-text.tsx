import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearValueText = () => (
  <div className="w-full max-w-md">
    <ProgressLinear
      defaultValue={72}
      showValueText
      translations={{
        value: (d) =>
          d.value == null
            ? "Loading"
            : `${Math.round(d.percent)}% complete (${d.value} of ${d.max})`,
      }}
    />
  </div>
);

export default ProgressLinearValueText;
