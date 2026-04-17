import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const INITIAL_SLIDES = [0, 1, 2, 3, 4] as const;

const CarouselDynamicSlidesDemo = () => {
  const [slides, setSlides] = useState<number[]>([...INITIAL_SLIDES]);
  const [page, setPage] = useState(0);

  const addSlide = () => {
    setSlides((prevSlides) => {
      const max = prevSlides.length === 0 ? -1 : Math.max(...prevSlides);
      return [...prevSlides, max + 1];
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4">
      <Carousel
        className="w-full space-y-3"
        page={page}
        slideCount={slides.length}
        onPageChange={(details) => setPage(details.page)}
      >
        <CarouselContent className="h-40 rounded-lg border border-border bg-muted/30">
          {slides.map((slide, index) => (
            <CarouselItem
              className="flex h-full items-center justify-center font-medium text-lg"
              index={index}
              key={`dynamic-${slide}`}
            >
              Slide {slide + 1}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControl className="flex items-center justify-between gap-2">
          <CarouselPrevious />
          <CarouselIndicatorGroup className="p-0">
            {slides.map((slide, index) => (
              <CarouselIndicatorItem
                index={index}
                key={`dynamic-indicator-${slide}`}
              />
            ))}
          </CarouselIndicatorGroup>
          <CarouselNext />
        </CarouselControl>
      </Carousel>
      <Button
        className="w-fit"
        onClick={addSlide}
        type="button"
        variant="outline"
      >
        <PlusIcon />
        Add Slide
      </Button>
    </div>
  );
};

export default CarouselDynamicSlidesDemo;
