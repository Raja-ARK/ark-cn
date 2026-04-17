import { Separator } from "@/components/ui/separator";

const SeparatorDemo = () => (
  <div className="flex flex-col gap-4">
    <div className="w-full max-w-md space-y-3">
      <p className="font-medium text-sm">Top section</p>
      <Separator />
      <p className="text-muted-foreground text-sm">Bottom section</p>
    </div>
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
);

export default SeparatorDemo;
