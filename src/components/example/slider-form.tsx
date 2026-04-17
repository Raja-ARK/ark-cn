import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

const SliderForm = () => {
  const [out, setOut] = useState<string | null>(null);

  return (
    <form
      className="flex max-w-xs flex-col gap-2 w-full"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setOut(String(formData.get("volume") ?? ""));
      }}
    >
      <Slider defaultValue={72} name="volume">
        <SliderLabel>Volume</SliderLabel>
        <SliderField />
      </Slider>
      <Button size="sm" type="submit" variant="default">
        Submit
      </Button>
      {out !== null ? (
        <p className="text-muted-foreground text-xs">
          FormData volume:{" "}
          <span className="font-medium text-foreground">{out}</span>
        </p>
      ) : null}
    </form>
  );
};

export default SliderForm;
