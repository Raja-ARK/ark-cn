import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Slider, SliderField } from "@/components/ui/slider";

const FieldSliderNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Volume</FieldLabel>
    <Slider aria-label={["Volume"]} defaultValue={60} min={0} max={100}>
      <SliderField />
    </Slider>
    <FieldDescription>Use arrow keys for precise adjustments.</FieldDescription>
  </Field>
);

export default FieldSliderNormalDemo;
