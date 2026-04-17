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
import { cn } from "@/lib/utils";

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"] as const;

const CarouselThumbnailIndicatorDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md space-y-3"
    slideCount={SLIDES.length}
  >
    <CarouselControl className="rounded-lg border border-border bg-muted/30">
      <CarouselPrevious anchorButtons />
      <CarouselContent className="h-40">
        {SLIDES.map((label, index) => (
          <CarouselItem
            className="flex h-full items-center justify-center font-medium text-lg"
            index={index}
            key={`thumb-${label}`}
          >
            {label}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext anchorButtons />
    </CarouselControl>
    <CarouselIndicatorGroup className="gap-2 p-0">
      {SLIDES.map((label, index) => (
        <CarouselIndicatorItem
          className={cn(
            "h-10 w-16 cursor-pointer overflow-hidden rounded border-2 border-transparent bg-muted/40 p-0 text-xs opacity-60 transition-opacity data-current:border-primary data-current:opacity-100 data-current:text-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          index={index}
          key={`thumb-indicator-${label}`}
        >
          <div className="flex h-full w-full items-center justify-center">
            {index + 1}
          </div>
        </CarouselIndicatorItem>
      ))}
    </CarouselIndicatorGroup>
  </Carousel>
);

export default CarouselThumbnailIndicatorDemo;
