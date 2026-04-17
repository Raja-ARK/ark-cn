import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContext,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const labels: Record<string, string> = {
  cpp: "C++",
  csharp: "C#",
  go: "Go",
  java: "Java",
  javascript: "JavaScript",
  php: "PHP",
  python: "Python",
  rust: "Rust",
  swift: "Swift",
  typescript: "TypeScript",
};

const keys = Object.keys(labels);

const SelectMultiple = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Select languages"
      defaultValue={["javascript", "typescript"]}
      items={keys.map((value) => ({ label: labels[value] ?? value, value }))}
      multiple
    >
      <SelectTriggerField>
        <SelectValue>
          {(api) => {
            const selected = api.value;
            if (selected.length === 0) {
              return "Select languages…";
            }
            const first = selected[0] ? labels[selected[0]] : "";
            const rest =
              selected.length > 1 ? ` (+${selected.length - 1} more)` : "";
            return first + rest;
          }}
        </SelectValue>
      </SelectTriggerField>
      <SelectPopup>
        <SelectContext>
          {(api) => (
            <>
              <div className="border-border border-b p-1">
                <Button
                  className="h-8 w-full justify-start px-2 text-xs"
                  onClick={() => api.selectAll()}
                  type="button"
                  variant="ghost"
                >
                  Select all
                </Button>
              </div>
              <SelectList>
                {keys.map((value) => {
                  const item = { label: labels[value] ?? value, value };
                  return (
                    <SelectItem key={value} item={item}>
                      <SelectItemText>{item.label}</SelectItemText>
                      <SelectItemIndicator />
                    </SelectItem>
                  );
                })}
              </SelectList>
            </>
          )}
        </SelectContext>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectMultiple;
