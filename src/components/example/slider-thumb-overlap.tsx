import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderThumbOverlap = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={[30, 70]} minStepsBetweenThumbs={10} step={1}>
      <SliderLabel>Min gap (10 steps)</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderThumbOverlap;
