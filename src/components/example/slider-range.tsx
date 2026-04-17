import {
  Slider,
  SliderContext,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";

const SliderRange = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={[30, 60]}>
      <SliderContext>
        {({ value }) => (
          <div className="flex justify-between gap-2">
            <SliderLabel>Range</SliderLabel>
            <span className="font-medium text-foreground text-xs tabular-nums">
              {value.join(" - ")}
            </span>
          </div>
        )}
      </SliderContext>
      <SliderField />
    </Slider>
  </div>
);

export default SliderRange;
