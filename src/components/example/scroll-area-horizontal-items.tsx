import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const ScrollAreaHorizontalItemsDemo = () => (
  <ScrollAreaRoot className="max-w-md">
    <ScrollAreaViewport className="pb-2.5">
      <ScrollAreaContent className="flex w-max gap-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
            key={String(i)}
          >
            <span className="font-medium text-sm">Item {i + 1}</span>
          </div>
        ))}
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollAreaHorizontalItemsDemo;
