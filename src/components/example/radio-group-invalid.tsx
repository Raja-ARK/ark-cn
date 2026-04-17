import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupInvalidDemo = () => (
  <RadioGroup className="max-w-xs" defaultValue="next" invalid>
    <RadioGroupLabel>Invalid state</RadioGroupLabel>
    <Radio value="next">Next.js</Radio>
    <Radio value="vite">Vite</Radio>
    <Radio value="astro">Astro</Radio>
  </RadioGroup>
);

export default RadioGroupInvalidDemo;
