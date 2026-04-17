import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Slider, SliderField } from "@/components/ui/slider";

const SliderWithField = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Opacity</FieldLabel>
    <FieldDescription>Helper text (Field + Slider).</FieldDescription>
    <Slider defaultValue={60}>
      <SliderField />
    </Slider>
  </Field>
);

export default SliderWithField;
