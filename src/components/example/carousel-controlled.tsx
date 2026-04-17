import { useState } from "react";
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

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"] as const;

const CarouselControlledDemo = () => {
  const [page, setPage] = useState(0);

  return (
    <Carousel
      className="mx-auto w-full max-w-md space-y-3"
      page={page}
      slideCount={SLIDES.length}
      onPageChange={(details) => setPage(details.page)}
    >
      <CarouselControl className="rounded-lg border border-border bg-muted/30">
        <CarouselPrevious anchorButtons />
        <CarouselContent className="h-40">
          {SLIDES.map((label, index) => (
            <CarouselItem
              className="flex h-full items-center justify-center font-medium text-lg"
              index={index}
              key={`controlled-${label}`}
            >
              {label}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext anchorButtons />
      </CarouselControl>
      <div className="flex items-center justify-center gap-3">
        <span className="text-muted-foreground text-sm">
          Page {page + 1} of {SLIDES.length}
        </span>
      </div>
      <CarouselIndicatorGroup className="p-0">
        {SLIDES.map((label, index) => (
          <CarouselIndicatorItem
            index={index}
            key={`controlled-indicator-${label}`}
          />
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  );
};

export default CarouselControlledDemo;
