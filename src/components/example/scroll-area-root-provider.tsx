import { Button } from "@/components/ui/button";
import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRootProvider,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  useScrollArea,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const ScrollAreaRootProviderDemo = () => {
  const scrollArea = useScrollArea();

  return (
    <div className="flex max-w-md flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => scrollArea.scrollToEdge({ edge: "top" })}
          size="sm"
          type="button"
          variant="outline"
        >
          Scroll to top
        </Button>
        <Button
          onClick={() => scrollArea.scrollToEdge({ edge: "bottom" })}
          size="sm"
          type="button"
          variant="outline"
        >
          Scroll to bottom
        </Button>
      </div>
      <ScrollAreaRootProvider
        className="box-border h-34 w-full"
        value={scrollArea}
      >
        <ScrollAreaViewport>
          <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
            <p className="m-0 text-foreground text-sm leading-snug">
              {SCROLL_AREA_LOREM_LONG}
            </p>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollAreaRootProvider>
    </div>
  );
};

export default ScrollAreaRootProviderDemo;
