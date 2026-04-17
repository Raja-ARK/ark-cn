import {
  Slider,
  SliderField,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/slider";

const SliderCenterOrigin = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={20} origin="center">
      <SliderLabel>Center origin</SliderLabel>
      <div className="flex justify-between">
        <span className="text-muted-foreground text-xs">
          Offset from center
        </span>
        <SliderValueText />
      </div>
      <SliderField />
    </Slider>
  </div>
);

export default SliderCenterOrigin;
