import {
  Fieldset,
  FieldsetDescription,
  FieldsetError,
  FieldsetLegend,
} from "@/components/ui/fieldset";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupFieldsetDemo = () => (
  <Fieldset className="max-w-sm">
    <FieldsetLegend>Select a framework</FieldsetLegend>
    <RadioGroup defaultValue="React">
      <Radio value="React">React</Radio>
      <Radio value="Solid">Solid</Radio>
      <Radio value="Vue">Vue</Radio>
    </RadioGroup>
    <FieldsetDescription>
      Choose your preferred framework for the docs examples.
    </FieldsetDescription>
    <FieldsetError>Please select a framework</FieldsetError>
  </Fieldset>
);

export default RadioGroupFieldsetDemo;
