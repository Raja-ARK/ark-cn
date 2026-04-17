import { FormatRelativeTime } from "@/components/ui/format";

const FormatRelativeTimeDemo = () => (
  <div className="grid w-full max-w-sm gap-3 rounded-xl border border-border bg-card p-4">
    <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
      <span className="font-medium text-sm">Updated</span>
      <span className="text-muted-foreground text-sm">
        <FormatRelativeTime value={new Date(Date.now() - 1000 * 60 * 45)} />
      </span>
    </div>
    <div className="flex items-center justify-between gap-3">
      <span className="font-medium text-sm">Trial ends</span>
      <span className="text-muted-foreground text-sm">
        <FormatRelativeTime
          value={new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)}
        />
      </span>
    </div>
  </div>
);

export default FormatRelativeTimeDemo;
