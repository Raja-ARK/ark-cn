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

const ITEMS = [
  { id: "1", label: "Small", width: "120px" },
  { id: "2", label: "Medium Size", width: "200px" },
  { id: "3", label: "XS", width: "80px" },
  { id: "4", label: "Large Content Here", width: "250px" },
  { id: "5", label: "Regular", width: "150px" },
] as const;

const CarouselVariableSizeDemo = () => (
  <Carousel
    autoSize
    className="mx-auto w-full max-w-md space-y-3"
    slideCount={ITEMS.length}
    spacing="8px"
  >
    <CarouselControl className="flex items-center justify-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </CarouselControl>
    <CarouselContent>
      {ITEMS.map((item, index) => (
        <CarouselItem index={index} key={item.id} snapAlign="center">
          <div
            className="flex h-24 items-center justify-center rounded-lg border border-border bg-muted/30 px-3 font-medium text-sm"
            style={{ width: item.width }}
          >
            {item.label}
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
              key={`variable-indicator-${index}`}
            />
          ))}
        </CarouselIndicatorGroup>
      )}
    </CarouselContext>
  </Carousel>
);

export default CarouselVariableSizeDemo;
