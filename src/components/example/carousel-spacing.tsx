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

const SLIDES = Array.from({ length: 6 }, (_, index) => index + 1);

const CarouselSpacingDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md space-y-3"
    slideCount={SLIDES.length}
    slidesPerPage={1.5}
    spacing="48px"
  >
    <p className="text-muted-foreground text-sm">spacing=&quot;48px&quot;</p>
    <CarouselContent className="h-40">
      {SLIDES.map((item, index) => (
        <CarouselItem index={index} key={`spacing-${item}`}>
          <div className="flex h-40 items-center justify-center rounded-lg border border-border bg-muted/30 font-medium text-lg">
            {item}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselControl className="flex items-center justify-between gap-2">
      <CarouselPrevious />
      <CarouselContext>
        {(api) => (
          <CarouselIndicatorGroup className="p-0">
            {api.pageSnapPoints.map((_, index) => (
              <CarouselIndicatorItem
                index={index}
                key={`spacing-indicator-${index}`}
              />
            ))}
          </CarouselIndicatorGroup>
        )}
      </CarouselContext>
      <CarouselNext />
    </CarouselControl>
  </Carousel>
);

export default CarouselSpacingDemo;
