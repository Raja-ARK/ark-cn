import { cn } from "@/lib/utils";

/** One row for ark-cn-only or extended props (not generated from Ark types). */
export type DocPropRow = {
  prop: string;
  type: string;
  description: string;
};

const parseRows = (rows: DocPropRow[] | string): DocPropRow[] => {
  if (typeof rows === "string") {
    try {
      return JSON.parse(rows) as DocPropRow[];
    } catch {
      return [];
    }
  }
  return rows;
};

export type DocPropsTableProps = {
  /** Column caption for the first column (default: Prop). */
  propLabel?: string;
  /** Rows, or a JSON string of `DocPropRow[]` for MDX. */
  rows: DocPropRow[] | string;
  className?: string;
};

export const DocPropsTable = ({
  propLabel = "Prop",
  rows,
  className,
}: DocPropsTableProps) => {
  const list = parseRows(rows);
  if (!list.length) {
    return null;
  }
  return (
    <div
      className={cn(
        "not-prose my-6 overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-slot="doc-props-table"
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              {propLabel}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              Type
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
          {list.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-b-0 even:bg-muted/25"
            >
              <td className="px-4 py-3 align-top font-mono text-[13px] text-foreground">
                {row.prop}
              </td>
              <td className="px-4 py-3 align-top font-mono text-[12px] text-muted-foreground">
                {row.type}
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
