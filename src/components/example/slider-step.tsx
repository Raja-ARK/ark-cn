import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderStep = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={7.5} max={10} min={5} step={0.01}>
      <SliderLabel>Step 0.01 (5-10)</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderStep;
