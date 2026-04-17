import { cn } from "@/lib/utils";

export type KeyboardShortcutRow = {
  keys: string[];
  description: string;
};

const parseRows = (
  data: KeyboardShortcutRow[] | string,
): KeyboardShortcutRow[] => {
  if (typeof data === "string") {
    try {
      return JSON.parse(data) as KeyboardShortcutRow[];
    } catch {
      return [];
    }
  }
  return data;
};

const Kbd = ({ children }: { children: string }) => (
  <kbd
    className={cn(
      "pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-0.5 rounded border border-border bg-muted px-1 font-mono text-[11px] font-medium text-foreground shadow-xs",
    )}
  >
    {children}
  </kbd>
);

export type KeyboardShortcutsTableProps = {
  /** Rows, or a JSON string of `KeyboardShortcutRow[]` for MDX. */
  data: KeyboardShortcutRow[] | string;
  className?: string;
};

export const KeyboardShortcutsTable = ({
  data,
  className,
}: KeyboardShortcutsTableProps) => {
  const rows = parseRows(data);
  if (!rows.length) {
    return null;
  }
  return (
    <div
      className={cn(
        "not-prose my-6 overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-slot="keyboard-shortcuts-table"
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              Key
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-b-0 even:bg-muted/25"
            >
              <td className="px-4 py-3 align-top">
                <span className="flex flex-wrap items-center gap-1">
                  {row.keys.map((k, j) => (
                    <span key={j} className="flex items-center gap-1">
                      {j > 0 ? (
                        <span
                          className="text-muted-foreground text-xs"
                          aria-hidden
                        >
                          +
                        </span>
                      ) : null}
                      <Kbd>{k}</Kbd>
                    </span>
                  ))}
                </span>
              </td>
              <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
