import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderReadOnly = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={55} readOnly>
      <SliderLabel>Read-only</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderReadOnly;
