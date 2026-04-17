import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupDisabledItem = () => (
  <RadioGroup className="max-w-xs" defaultValue="next">
    <RadioGroupLabel>Framework</RadioGroupLabel>
    <Radio value="next">Next.js</Radio>
    <Radio disabled value="vite">
      Vite (disabled)
    </Radio>
    <Radio value="astro">Astro</Radio>
  </RadioGroup>
);

export default RadioGroupDisabledItem;
