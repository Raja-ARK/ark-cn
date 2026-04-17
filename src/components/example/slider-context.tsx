import {
  Slider,
  SliderContext,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";

const SliderContextDemo = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={40}>
      <SliderContext>
        {(ctx) => (
          <div className="flex justify-between gap-2">
            <SliderLabel>Dragging: {String(ctx.dragging)}</SliderLabel>
            <span className="font-medium text-foreground text-sm tabular-nums">
              {ctx.value.join(", ")}
            </span>
          </div>
        )}
      </SliderContext>
      <SliderField />
    </Slider>
  </div>
);

export default SliderContextDemo;
