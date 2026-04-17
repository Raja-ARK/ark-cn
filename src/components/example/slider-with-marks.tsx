import {
  Slider,
  SliderField,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
} from "@/components/ui/slider";

const SliderWithMarks = () => (
  <div className="w-full max-w-xs">
    <Slider defaultValue={50}>
      <SliderLabel>With marks</SliderLabel>
      <SliderField />
      <SliderMarkerGroup>
        <SliderMarker value={0}>0</SliderMarker>
        <SliderMarker value={25}>25</SliderMarker>
        <SliderMarker value={50}>50</SliderMarker>
        <SliderMarker value={75}>75</SliderMarker>
        <SliderMarker value={100}>100</SliderMarker>
      </SliderMarkerGroup>
    </Slider>
  </div>
);

export default SliderWithMarks;
