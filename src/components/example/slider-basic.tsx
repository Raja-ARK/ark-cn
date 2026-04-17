import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderBasic = () => (
  <div className="w-full max-w-xs">
    <Slider aria-label={["Volume"]} defaultValue={50}>
      <SliderLabel>Volume</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

export default SliderBasic;
