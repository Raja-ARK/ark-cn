import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupWithFieldDemo = () => (
  <Field className="max-w-xs gap-3">
    <FieldLabel>Stack</FieldLabel>
    <RadioGroup defaultValue="next" name="stack-field">
      <Radio value="next">Next.js</Radio>
      <Radio value="vite">Vite</Radio>
      <Radio value="astro">Astro</Radio>
    </RadioGroup>
    <FieldDescription>Pick one framework for the project.</FieldDescription>
  </Field>
);

export default RadioGroupWithFieldDemo;
