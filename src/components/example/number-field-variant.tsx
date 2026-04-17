import {
  NumberFieldInput,
  NumberFieldLabel,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldVariantDemo = () => (
  <div className="flex flex-col gap-2">
    <NumberFieldRoot>
      <NumberFieldLabel>Number field (End)</NumberFieldLabel>
      <NumberFieldInput triggerVariant="end" />
    </NumberFieldRoot>
    <NumberFieldRoot>
      <NumberFieldLabel>Number field (Between)</NumberFieldLabel>
      <NumberFieldInput triggerVariant="between" />
    </NumberFieldRoot>
  </div>
);

export default NumberFieldVariantDemo;
