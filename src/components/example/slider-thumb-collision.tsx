import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderThumbCollision = () => (
  <div className="flex w-full max-w-lg flex-col gap-6 justify-center items-center">
    <div className="w-full max-w-xs">
      <Slider defaultValue={[25, 60]} thumbCollisionBehavior="push">
        <SliderLabel>push</SliderLabel>
        <SliderField />
      </Slider>
    </div>
    <div className="w-full max-w-xs">
      <Slider defaultValue={[25, 60]} thumbCollisionBehavior="swap">
        <SliderLabel>swap</SliderLabel>
        <SliderField />
      </Slider>
    </div>
  </div>
);

export default SliderThumbCollision;
