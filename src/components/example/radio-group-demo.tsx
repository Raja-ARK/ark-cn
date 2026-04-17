import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupDemo = () => (
  <RadioGroup className="w-full max-w-md" defaultValue="react">
    <Radio value="react">React</Radio>
    <Radio value="solid">Solid</Radio>
    <Radio value="vue">Vue</Radio>
  </RadioGroup>
);

export default RadioGroupDemo;
