import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderDemo = () => {
  return (
    <Slider defaultValue={72} name="volume" className="w-full max-w-xs">
      <SliderLabel>Volume</SliderLabel>
      <SliderField />
    </Slider>
  );
};

export default SliderDemo;
