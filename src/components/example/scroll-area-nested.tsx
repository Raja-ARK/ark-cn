import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_NEST_OUTER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const SCROLL_AREA_LOREM_NEST_INNER =
  "This is a nested scroll area. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const ScrollAreaNestedDemo = () => (
  <ScrollAreaRoot className="box-border h-48 w-96 max-w-[calc(100vw-8rem)]">
    <ScrollAreaViewport>
      <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
        <p className="m-0 text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_NEST_OUTER}
        </p>
        <ScrollAreaRoot className="box-border h-32 w-full">
          <ScrollAreaViewport>
            <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
              <p className="m-0 text-foreground text-sm leading-snug">
                {SCROLL_AREA_LOREM_NEST_INNER}
              </p>
              <p className="m-0 text-foreground text-sm leading-snug">
                {SCROLL_AREA_LOREM_NEST_INNER}
              </p>
              <p className="m-0 text-foreground text-sm leading-snug">
                {SCROLL_AREA_LOREM_NEST_INNER}
              </p>
              <p className="m-0 text-foreground text-sm leading-snug">
                {SCROLL_AREA_LOREM_NEST_INNER}
              </p>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaCorner />
        </ScrollAreaRoot>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollAreaNestedDemo;
