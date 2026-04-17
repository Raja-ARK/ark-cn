import { useState } from "react";
import { AngleSlider } from "@/components/ui/angle-slider";

const AngleSliderControlled = () => {
  const [value, setValue] = useState(120);
  return (
    <AngleSlider
      onValueChange={(details) => setValue(details.value)}
      size={180}
      value={value}
      variant="ring"
    />
  );
};

export default AngleSliderControlled;
