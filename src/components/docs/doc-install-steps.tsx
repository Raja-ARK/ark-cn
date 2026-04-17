import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const DocSteps = ({ children }: { children: ReactNode }) => {
  const items = Children.toArray(children).filter(Boolean);
  return (
    <div className={cn("not-prose my-6 flex flex-col gap-5")}>
      {items.map((child, index) => (
        <div key={index} className="flex gap-3">
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-semibold text-foreground",
            )}
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 pt-0.5 text-sm leading-relaxed [&_p]:my-1">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};

/** Pass-through wrapper so MDX can use `<DocSteps><DocStep>…</DocStep></DocSteps>`. */
export const DocStep = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);
