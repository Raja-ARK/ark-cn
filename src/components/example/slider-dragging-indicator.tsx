import {
  Slider,
  SliderDraggingIndicator,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";

const SliderDraggingIndicatorDemo = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={40}>
      <SliderLabel>Drag me</SliderLabel>
      <SliderField
        thumbsProps={{ children: () => <SliderDraggingIndicator /> }}
      />
    </Slider>
  </div>
);

export default SliderDraggingIndicatorDemo;
