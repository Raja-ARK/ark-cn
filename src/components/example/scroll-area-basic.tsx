import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const ScrollAreaBasicDemo = () => (
  <ScrollAreaRoot className="box-border h-34 w-full max-w-96">
    <ScrollAreaViewport>
      <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
        <p className="m-0 text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_LONG}
        </p>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollAreaBasicDemo;
