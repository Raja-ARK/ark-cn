import {
  ScrollAreaContent,
  ScrollAreaContext,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const SCROLL_AREA_LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const ScrollAreaContextDemo = () => (
  <ScrollAreaRoot className="box-border h-34 w-full max-w-sm">
    <ScrollAreaContext>
      {({ isAtTop, isAtBottom }) => (
        <>
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
          <p className="mt-2 text-muted-foreground text-xs">
            At top:{" "}
            <span className="font-medium text-foreground">
              {String(isAtTop)}
            </span>
            {" · "}At bottom:{" "}
            <span className="font-medium text-foreground">
              {String(isAtBottom)}
            </span>
          </p>
        </>
      )}
    </ScrollAreaContext>
  </ScrollAreaRoot>
);

export default ScrollAreaContextDemo;
