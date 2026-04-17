import {
  Slider,
  SliderContext,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";
import { useThemeCustomize } from "../theme-customize-context";

const SliderValue = ({ suffix }: { suffix: string }) => {
  return (
    <SliderContext>
      {(api) => (
        <span className="font-variant-numeric text-foreground text-sm tabular-nums">
          {api.value[0]}
          {suffix}
        </span>
      )}
    </SliderContext>
  );
};

const SliderValueFixed = ({ decimals }: { decimals: number }) => {
  return (
    <SliderContext>
      {(api) => (
        <span className="font-variant-numeric text-foreground text-sm tabular-nums">
          {api.value[0].toFixed(decimals)}
        </span>
      )}
    </SliderContext>
  );
};

export const OtherTab = () => {
  const { config, updateOther } = useThemeCustomize();
  const { other } = config;

  return (
    <div className="space-y-5">
      {/* Radius */}
      <Slider
        min={0}
        max={2}
        step={0.025}
        value={Number.parseFloat(other.radius) || 0.5}
        onValueChange={(d) => updateOther("radius", `${d.value[0]}rem`)}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Radius</SliderLabel>
          <SliderValue suffix="rem" />
        </div>
        <SliderField />
      </Slider>

      {/* Shadow Opacity */}
      <Slider
        min={0}
        max={0.5}
        step={0.01}
        value={other.shadowOpacity}
        onValueChange={(d) => updateOther("shadowOpacity", d.value[0])}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Shadow Opacity</SliderLabel>
          <SliderValueFixed decimals={2} />
        </div>
        <SliderField />
      </Slider>

      {/* Shadow Blur */}
      <Slider
        min={0}
        max={20}
        step={1}
        value={other.shadowBlur}
        onValueChange={(d) => updateOther("shadowBlur", d.value[0])}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Shadow Blur</SliderLabel>
          <SliderValue suffix="px" />
        </div>
        <SliderField />
      </Slider>

      {/* Shadow Spread */}
      <Slider
        min={-10}
        max={10}
        step={1}
        value={other.shadowSpread}
        onValueChange={(d) => updateOther("shadowSpread", d.value[0])}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Shadow Spread</SliderLabel>
          <SliderValue suffix="px" />
        </div>
        <SliderField />
      </Slider>

      {/* Shadow Offset Y */}
      <Slider
        min={0}
        max={10}
        step={1}
        value={other.shadowOffsetY}
        onValueChange={(d) => updateOther("shadowOffsetY", d.value[0])}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Shadow Offset Y</SliderLabel>
          <SliderValue suffix="px" />
        </div>
        <SliderField />
      </Slider>
    </div>
  );
};
