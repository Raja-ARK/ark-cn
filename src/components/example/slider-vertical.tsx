import { Slider, SliderField } from "@/components/ui/slider";

const SliderVertical = () => (
  <Slider
    aria-label={["Storage size in GB"]}
    defaultValue={15}
    max={35}
    min={5}
    orientation="vertical"
  >
    <SliderField />
  </Slider>
);

export default SliderVertical;
