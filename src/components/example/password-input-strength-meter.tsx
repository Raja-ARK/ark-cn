import { useMemo, useState } from "react";
import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

type StrengthLabel = "Weak" | "Fair" | "Good" | "Strong";

const STRENGTH_BAR = [
  "bg-destructive/80",
  "bg-orange-500/90",
  "bg-amber-400/90",
  "bg-emerald-600/90",
] as const;

const getStrength = (value: string): { id: number; value: StrengthLabel } => {
  if (!value) {
    return { id: 0, value: "Weak" };
  }

  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  const id = Math.max(0, Math.min(3, score - 1));
  const labels: StrengthLabel[] = ["Weak", "Fair", "Good", "Strong"];
  return { id, value: labels[id] };
};

const PasswordInputStrengthMeter = () => {
  const [value, setValue] = useState("");
  const result = useMemo(() => getStrength(value), [value]);
  const widthPct =
    value.length === 0 ? 0 : Math.min(100, ((result.id + 1) / 4) * 100);

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <PasswordInputRoot>
        <PasswordInputLabel>Password</PasswordInputLabel>
        <PasswordInput
          onChange={(event) => setValue(event.currentTarget.value)}
          value={value}
        />
      </PasswordInputRoot>

      <div className="space-y-1">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full transition-[width] duration-200",
              STRENGTH_BAR[result.id] ?? STRENGTH_BAR[0],
            )}
            style={{ width: `${widthPct}%` }}
          />
        </div>
        <p className="text-muted-foreground text-xs">
          {value.length === 0 ? (
            "Type to measure strength."
          ) : (
            <>
              Strength:{" "}
              <span className="font-medium text-foreground">
                {result.value}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default PasswordInputStrengthMeter;
