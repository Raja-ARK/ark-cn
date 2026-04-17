import {
  Carousel,
  CarouselContent,
  CarouselContext,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselIndicatorItem,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = Array.from({ length: 6 }, (_, index) => `Slide ${index + 1}`);

const CarouselSlidesPerPageDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md space-y-3"
    slideCount={SLIDES.length}
    slidesPerPage={2}
    spacing="20px"
  >
    <CarouselControl className="flex items-center justify-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </CarouselControl>
    <CarouselContent className="h-40">
      {SLIDES.map((label, index) => (
        <CarouselItem index={index} key={`per-page-${label}`}>
          <div className="flex h-40 items-center justify-center rounded-lg border border-border bg-muted/30 font-medium text-lg">
            {label}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselContext>
      {(api) => (
        <CarouselIndicatorGroup className="p-0">
          {api.pageSnapPoints.map((_, index) => (
            <CarouselIndicatorItem
              index={index}
              key={`per-page-indicator-${index}`}
            />
          ))}
        </CarouselIndicatorGroup>
      )}
    </CarouselContext>
  </Carousel>
);

export default CarouselSlidesPerPageDemo;
