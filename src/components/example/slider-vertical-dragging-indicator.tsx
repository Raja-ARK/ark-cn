import {
  Slider,
  SliderDraggingIndicator,
  SliderField,
} from "@/components/ui/slider";

const SliderVerticalDraggingIndicator = () => (
  <Slider
    aria-label={["Storage size in GB"]}
    defaultValue={15}
    max={35}
    min={5}
    orientation="vertical"
  >
    <SliderField
      thumbsProps={{ children: () => <SliderDraggingIndicator /> }}
    />
  </Slider>
);

export default SliderVerticalDraggingIndicator;
