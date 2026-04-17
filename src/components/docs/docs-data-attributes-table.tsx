import { cn } from "@/lib/utils";

export type DataAttributeRow = {
  title: string;
  value: string[];
};

const parseRows = (data: DataAttributeRow[] | string): DataAttributeRow[] => {
  if (typeof data === "string") {
    try {
      return JSON.parse(data) as DataAttributeRow[];
    } catch {
      return [];
    }
  }
  return data;
};

export type DataAttributesTableProps = {
  /** Rows, or a JSON string of `DataAttributeRow[]` for MDX. */
  data: DataAttributeRow[] | string;
  className?: string;
};

export const DataAttributesTable = ({
  data,
  className,
}: DataAttributesTableProps) => {
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
      data-slot="data-attributes-table"
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              Data attribute
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start font-medium text-muted-foreground"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-b-0 even:bg-muted/25"
            >
              <td className="px-4 py-3 align-top font-mono text-[13px] text-foreground">
                {row.title}
              </td>
              <td className="px-4 py-3 align-top">
                <code className="whitespace-pre-wrap rounded-md border border-border bg-muted/80 px-2 py-1 font-mono text-[12px] text-foreground">
                  {row.value.join(" | ")}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
