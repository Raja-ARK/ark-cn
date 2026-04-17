import { FormatTime } from "@/components/ui/format";

const launchDate = new Date("2026-04-16T17:35:00.000Z");

const FormatTimeDemo = () => (
  <div className="grid w-full max-w-sm gap-3 rounded-xl border border-border bg-card p-4">
    <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
      <span className="font-medium text-sm">12-hour clock</span>
      <span className="text-muted-foreground text-sm">
        <FormatTime value={launchDate} format="12h" />
      </span>
    </div>
    <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
      <span className="font-medium text-sm">12-hour with seconds</span>
      <span className="text-muted-foreground text-sm">
        <FormatTime value={launchDate} format="12h" withSeconds />
      </span>
    </div>
    <div className="flex items-center justify-between gap-3">
      <span className="font-medium text-sm">24-hour clock</span>
      <span className="text-muted-foreground text-sm">
        <FormatTime value={launchDate} format="24h" />
      </span>
    </div>
  </div>
);

export default FormatTimeDemo;
