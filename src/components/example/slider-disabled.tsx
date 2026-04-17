import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderDisabled = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={40} disabled>
      <SliderLabel>Disabled</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderDisabled;
