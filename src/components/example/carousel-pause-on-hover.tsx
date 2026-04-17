import {
  Carousel,
  CarouselContent,
  CarouselContext,
  CarouselIndicatorGroup,
  CarouselIndicatorItem,
  CarouselItem,
} from "@/components/ui/carousel";

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"] as const;

const CarouselPauseOnHoverDemo = () => (
  <Carousel
    className="mx-auto w-full max-w-md space-y-3"
    autoplay={{ delay: 1800 }}
    loop
    slideCount={SLIDES.length}
  >
    <CarouselContext>
      {({ isPlaying }) => (
        <p className="text-center text-muted-foreground text-sm">
          Autoplay: {isPlaying ? "playing" : "paused"}
        </p>
      )}
    </CarouselContext>
    <CarouselContext>
      {(api) => (
        <CarouselContent
          className="h-40 rounded-lg border border-border bg-muted/30"
          onPointerLeave={() => api.play()}
          onPointerOver={() => api.pause()}
        >
          {SLIDES.map((label, index) => (
            <CarouselItem
              className="flex h-full items-center justify-center font-medium text-lg"
              index={index}
              key={`hover-${label}`}
            >
              {label}
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
    </CarouselContext>
    <CarouselIndicatorGroup className="p-0">
      {SLIDES.map((label, index) => (
        <CarouselIndicatorItem index={index} key={`hover-indicator-${label}`} />
      ))}
    </CarouselIndicatorGroup>
  </Carousel>
);

export default CarouselPauseOnHoverDemo;
