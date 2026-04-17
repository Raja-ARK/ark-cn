import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupOrientation = () => (
  <RadioGroup className="max-w-md" defaultValue="a" orientation="horizontal">
    <RadioGroupLabel>Axis</RadioGroupLabel>
    <Radio value="a">Option A</Radio>
    <Radio value="b">Option B</Radio>
    <Radio value="c">Option C</Radio>
  </RadioGroup>
);

export default RadioGroupOrientation;
