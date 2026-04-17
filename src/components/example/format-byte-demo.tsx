import { FormatByte } from "@/components/ui/format";

const samples = [
  { label: "Avatar", value: 48_120 },
  { label: "Hero image", value: 1_560_000 },
  { label: "Backup", value: 9_220_000_000 },
] as const;

const FormatByteDemo = () => (
  <div className="grid w-full max-w-sm gap-3 rounded-xl border border-border bg-card p-4">
    {samples.map((sample) => (
      <div
        key={sample.label}
        className="flex items-center justify-between gap-3 border-border border-b pb-3 last:border-b-0 last:pb-0"
      >
        <span className="font-medium text-sm">{sample.label}</span>
        <span className="text-muted-foreground text-sm">
          <FormatByte value={sample.value} />
        </span>
      </div>
    ))}
  </div>
);

export default FormatByteDemo;
