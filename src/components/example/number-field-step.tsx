import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldStepDemo = () => (
  <div className="flex flex-col gap-2">
    <NumberFieldRoot defaultValue="5" step={10}>
      <NumberFieldInput />
    </NumberFieldRoot>
    <NumberFieldRoot defaultValue="0.5" step={0.1}>
      <NumberFieldInput />
    </NumberFieldRoot>
    <NumberFieldRoot defaultValue="0.6" step={0.2}>
      <NumberFieldInput />
    </NumberFieldRoot>
  </div>
);

export default NumberFieldStepDemo;
