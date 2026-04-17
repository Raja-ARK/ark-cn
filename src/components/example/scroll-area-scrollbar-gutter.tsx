import { ScrollArea } from "@/components/ui/scroll-area";

const rows = Array.from({ length: 40 }, (_, i) => `Reserved gutter · ${i}`);

const ScrollAreaScrollbarGutterDemo = () => (
  <ScrollArea className="h-52 max-w-xs" scrollbarGutter>
    <div className="flex flex-col gap-1 px-4 py-2">
      {rows.map((row) => (
        <div className="text-sm" key={row}>
          {row}
        </div>
      ))}
    </div>
  </ScrollArea>
);

export default ScrollAreaScrollbarGutterDemo;
