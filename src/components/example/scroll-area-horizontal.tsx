import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_MEDIUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const ScrollAreaHorizontalDemo = () => (
  <ScrollAreaRoot className="box-border h-auto w-full max-w-96">
    <ScrollAreaViewport>
      <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollAreaHorizontalDemo;
