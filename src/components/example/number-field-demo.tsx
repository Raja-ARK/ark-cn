import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldDemo = () => (
  <NumberFieldRoot defaultValue="5">
    <NumberFieldInput />
  </NumberFieldRoot>
);

export default NumberFieldDemo;
