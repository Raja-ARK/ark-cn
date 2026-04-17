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

const SLIDES = ["Slide 1", "Slide 2", "Slide 3"] as const;

const CarouselDemo = () => (
  <Carousel className="mx-auto w-full max-w-md" slideCount={SLIDES.length}>
    <CarouselControl className="relative h-40 rounded-lg border border-border bg-muted/30">
      <CarouselContent>
        {SLIDES.map((label, index) => (
          <CarouselItem
            className="flex h-40 items-center justify-center font-medium text-lg"
            index={index}
            key={label}
          >
            {label}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious anchorButtons />
      <CarouselNext anchorButtons />
    </CarouselControl>
    <CarouselIndicatorGroup>
      {SLIDES.map((label, index) => (
        <CarouselIndicatorItem index={index} key={label} />
      ))}
    </CarouselIndicatorGroup>
  </Carousel>
);

export default CarouselDemo;
