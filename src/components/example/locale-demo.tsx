import { FormatByte, FormatTime } from "@/components/ui/format";
import {
  LocaleProvider,
  useCollator,
  useDateFormatter,
  useFilter,
  useLocaleContext,
} from "@/components/ui/locale";

const LocalePreview = () => {
  const locale = useLocaleContext();
  const collator = useCollator({ usage: "sort" });
  const formatter = useDateFormatter({ dateStyle: "medium" });
  const { contains } = useFilter({ sensitivity: "base" });

  const sorted = ["zebra", "apple", "cairo"].slice().sort(collator.compare);

  return (
    <div className="grid w-full max-w-md gap-3 rounded-xl border border-border bg-card p-4 text-sm">
      <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
        <span className="font-medium">Locale</span>
        <span className="text-muted-foreground">{locale.locale}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
        <span className="font-medium">Formatted date</span>
        <span className="text-muted-foreground">
          {formatter.format(new Date("2026-04-16T00:00:00.000Z"))}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
        <span className="font-medium">Formatted size</span>
        <span className="text-muted-foreground">
          <FormatByte value={1_280_000} />
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
        <span className="font-medium">Formatted time</span>
        <span className="text-muted-foreground">
          <FormatTime
            value={new Date("2026-04-16T17:35:00.000Z")}
            format="12h"
          />
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 border-border border-b pb-3">
        <span className="font-medium">Contains "ca"</span>
        <span className="text-muted-foreground">
          {contains("Cairo", "ca") ? "Yes" : "No"}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium">Sorted</span>
        <span className="text-muted-foreground">{sorted.join(", ")}</span>
      </div>
    </div>
  );
};

const LocaleDemo = () => (
  <LocaleProvider locale="en-US">
    <LocalePreview />
  </LocaleProvider>
);

export default LocaleDemo;
