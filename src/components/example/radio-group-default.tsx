import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupDefault = () => (
  <RadioGroup className="max-w-xs" defaultValue="next">
    <RadioGroupLabel>Framework</RadioGroupLabel>
    <Radio value="next">Next.js</Radio>
    <Radio value="vite">Vite</Radio>
    <Radio value="astro">Astro</Radio>
  </RadioGroup>
);

export default RadioGroupDefault;
