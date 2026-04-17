import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_MEDIUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const SCROLL_AREA_LOREM_PARA2 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";

const SCROLL_AREA_LOREM_PARA3 =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.";

const ScrollAreaBothDirectionsDemo = () => (
  <ScrollAreaRoot className="box-border h-48 w-96 max-w-[calc(100vw-8rem)]">
    <ScrollAreaViewport>
      <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA2}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA3}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA2}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA3}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA2}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA3}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA2}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA3}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_MEDIUM}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA2}
        </p>
        <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
          {SCROLL_AREA_LOREM_PARA3}
        </p>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollAreaBothDirectionsDemo;
