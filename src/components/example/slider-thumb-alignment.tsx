import {
  Slider,
  SliderField,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/slider";

const SliderThumbAlignment = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <div className="w-full max-w-xs">
      <Slider defaultValue={50} thumbAlignment="contain">
        <div className="flex justify-between">
          <SliderLabel>contain</SliderLabel>
          <SliderValueText />
        </div>
        <SliderField />
      </Slider>
    </div>
    <div className="w-full max-w-xs">
      <Slider defaultValue={50} thumbAlignment="center">
        <div className="flex justify-between">
          <SliderLabel>center</SliderLabel>
          <SliderValueText />
        </div>
        <SliderField />
      </Slider>
    </div>
  </div>
);

export default SliderThumbAlignment;
