import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
  usePopoverContext,
} from "@/components/ui/popover";

const Inner = () => {
  const ctx = usePopoverContext();

  return (
    <p className="text-muted-foreground text-xs">
      usePopoverContext:{" "}
      <span className="font-medium text-foreground">{String(ctx.open)}</span>
    </p>
  );
};

const PopoverUseContextHookDemo = () => (
  <Popover>
    <Inner />
    <PopoverTrigger asChild className="mt-2">
      <Button type="button" variant="outline">
        Open
      </Button>
    </PopoverTrigger>
    <PopoverPopup>
      <PopoverTitle>Inside content</PopoverTitle>
      <PopoverDescription>
        Call <code className="text-foreground">usePopoverContext</code> in
        descendants of Root.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverUseContextHookDemo;
