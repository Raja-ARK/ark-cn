import {
  Carousel,
  CarouselAutoplay,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = ["Slide 1", "Slide 2", "Slide 3"] as const;

const CarouselAutoplayDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md"
    slideCount={SLIDES.length}
    autoplay={{ delay: 2000 }}
  >
    <CarouselContent className="h-40 rounded-lg border border-border bg-muted/30">
      {SLIDES.map((label, index) => (
        <CarouselItem
          className="flex h-40 items-center justify-center font-medium text-lg"
          index={index}
          key={`auto-${label}`}
        >
          {label}
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselControl className="flex items-center justify-center gap-2 pt-3">
      <CarouselPrevious size="icon-sm" />
      <CarouselAutoplay size="icon-sm" />
      <CarouselNext size="icon-sm" />
    </CarouselControl>
  </Carousel>
);

export default CarouselAutoplayDemo;
