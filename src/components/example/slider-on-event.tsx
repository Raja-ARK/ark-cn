import { useState } from "react";

import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderOnEvent = () => {
  const [live, setLive] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="flex max-w-xs flex-col gap-2 w-full">
      <Slider
        defaultValue={40}
        onValueChange={(details) => {
          setLive(details.value.join(", "));
        }}
        onValueChangeEnd={(details) => {
          setEnd(details.value.join(", "));
        }}
        className="w-full"
      >
        <SliderLabel>Events</SliderLabel>
        <SliderField />
      </Slider>
      <p className="text-muted-foreground text-xs">
        onValueChange:{" "}
        <span className="font-medium text-foreground">{live || "-"}</span>
      </p>
      <p className="text-muted-foreground text-xs">
        onValueChangeEnd:{" "}
        <span className="font-medium text-foreground">{end || "-"}</span>
      </p>
    </div>
  );
};

export default SliderOnEvent;
