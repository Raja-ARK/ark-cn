import { Button } from "@/components/ui/button";
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

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"] as const;

const CarouselScrollToDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md space-y-3"
    slideCount={SLIDES.length}
  >
    <CarouselContext>
      {(api) => (
        <Button
          className="w-fit"
          onClick={() => api.scrollToIndex(3)}
          type="button"
          variant="outline"
        >
          Go to slide 4
        </Button>
      )}
    </CarouselContext>
    <CarouselContent className="h-40 rounded-lg border border-border bg-muted/30">
      {SLIDES.map((label, index) => (
        <CarouselItem
          className="flex h-full items-center justify-center font-medium text-lg"
          index={index}
          key={`scroll-${label}`}
        >
          {label}
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselControl className="flex items-center justify-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </CarouselControl>
    <CarouselIndicatorGroup className="p-0">
      {SLIDES.map((label, index) => (
        <CarouselIndicatorItem
          index={index}
          key={`scroll-indicator-${label}`}
        />
      ))}
    </CarouselIndicatorGroup>
  </Carousel>
);

export default CarouselScrollToDemo;
