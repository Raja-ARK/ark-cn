import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselIndicatorItem,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
] as const;

const CarouselVerticalDemo = () => (
  <Carousel
    className="mx-auto flex w-full max-w-md flex-row h-50 gap-4"
    orientation="vertical"
    slideCount={SLIDES.length}
  >
    <CarouselContent className="flex flex-1 rounded-lg border border-border bg-muted/30">
      {SLIDES.map((label, index) => (
        <CarouselItem
          className="flex-[0_0_100%] min-w-0 flex items-center justify-center font-medium text-lg w-full h-full"
          index={index}
          key={`vertical-${label}`}
          snapAlign="end"
        >
          {label}
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselControl className="flex items-center justify-between gap-2 data-[orientation='vertical']:flex-col">
      <CarouselPrevious />
      <CarouselIndicatorGroup className="p-0">
        {SLIDES.map((label, index) => (
          <CarouselIndicatorItem
            index={index}
            key={`vertical-indicator-${label}`}
          />
        ))}
      </CarouselIndicatorGroup>
      <CarouselNext />
    </CarouselControl>
  </Carousel>
);

export default CarouselVerticalDemo;
