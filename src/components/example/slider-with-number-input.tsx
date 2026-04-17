import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderWithNumberInput = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="flex max-w-xs flex-col gap-3 w-full">
      <Slider
        max={100}
        min={0}
        onValueChange={(details) => {
          setValue(details.value[0] ?? 0);
        }}
        value={value}
        className="w-full"
      >
        <SliderLabel>Opacity</SliderLabel>
        <SliderField />
      </Slider>
      <Input
        aria-label="Matching numeric value"
        className="max-w-32"
        max={100}
        min={0}
        onChange={(event) => {
          setValue(Number(event.target.value));
        }}
        type="number"
        value={value}
      />
    </div>
  );
};

export default SliderWithNumberInput;
