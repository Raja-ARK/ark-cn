import {
  NumberFieldInput,
  NumberFieldLabel,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldLabelDemo = () => (
  <NumberFieldRoot defaultValue="5" max={10} min={0}>
    <NumberFieldLabel>Number</NumberFieldLabel>
    <NumberFieldInput />
  </NumberFieldRoot>
);

export default NumberFieldLabelDemo;
