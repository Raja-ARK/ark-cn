import { Slider, SliderField } from "@/components/ui/slider";

const SliderVerticalTwoRanges = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-foreground text-xs">5-35 GB</p>
        <Slider
          aria-label={["Min storage", "Max storage"]}
          defaultValue={[12, 28]}
          max={35}
          min={5}
          orientation="vertical"
        >
          <SliderField />
        </Slider>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-foreground text-xs">0-100 GB</p>
        <Slider
          aria-label={["Min storage", "Max storage"]}
          defaultValue={[25, 75]}
          max={100}
          min={0}
          orientation="vertical"
        >
          <SliderField />
        </Slider>
      </div>
    </div>
    <p className="text-muted-foreground text-xs">
      Two vertical range sliders (2 thumbs each) with different bounds.
    </p>
  </div>
);

export default SliderVerticalTwoRanges;
