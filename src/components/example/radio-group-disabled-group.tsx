import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupDisabledGroup = () => (
  <RadioGroup className="max-w-xs" defaultValue="next" disabled>
    <RadioGroupLabel>Framework (group disabled)</RadioGroupLabel>
    <Radio value="next">Next.js</Radio>
    <Radio value="vite">Vite</Radio>
    <Radio value="astro">Astro</Radio>
  </RadioGroup>
);

export default RadioGroupDisabledGroup;
