import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldDisabledDemo = () => (
  <NumberFieldRoot defaultValue="5" disabled>
    <NumberFieldInput />
  </NumberFieldRoot>
);

export default NumberFieldDisabledDemo;
