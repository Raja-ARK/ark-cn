import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupReadOnlyDemo = () => (
  <RadioGroup className="max-w-xs" defaultValue="vite" readOnly>
    <RadioGroupLabel>Read-only</RadioGroupLabel>
    <Radio value="next">Next.js</Radio>
    <Radio value="vite">Vite</Radio>
    <Radio value="astro">Astro</Radio>
  </RadioGroup>
);

export default RadioGroupReadOnlyDemo;
