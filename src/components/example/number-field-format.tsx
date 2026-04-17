import {
  NumberFieldInput,
  NumberFieldRoot,
} from "@/components/ui/number-field";

const NumberFieldFormatDemo = () => (
  <NumberFieldRoot
    defaultValue="5"
    formatOptions={{
      style: "currency",
      currency: "USD",
    }}
  >
    <NumberFieldInput />
  </NumberFieldRoot>
);

export default NumberFieldFormatDemo;
