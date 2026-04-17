import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Slider, SliderField } from "@/components/ui/slider";

const FieldSliderInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Daily usage limit</FieldLabel>
    <Slider
      aria-label={["Daily usage limit"]}
      defaultValue={0}
      invalid
      min={10}
      max={100}
    >
      <SliderField />
    </Slider>
    <FieldError>Set a value greater than or equal to 10.</FieldError>
  </Field>
);

export default FieldSliderInvalidDemo;
