import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderMinMax = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={0} max={10} min={-10}>
      <SliderLabel>-10 to 10</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderMinMax;
