import {
  Select,
  SelectGroupedList,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
] as const;

const backend = [
  { label: "Express", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Fastify", value: "fastify" },
] as const;

const withGroups = [...frontend, ...backend];

const SelectGrouping = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Grouped frameworks"
      groupBy={(item) =>
        frontend.some((x) => x.value === item.value) ? "Frontend" : "Backend"
      }
      items={withGroups}
    >
      <SelectTriggerField>
        <SelectValue placeholder="Select stack" />
      </SelectTriggerField>
      <SelectPopup>
        <SelectGroupedList items={withGroups}>
          {([group, groupItems]) => (
            <SelectItemGroup key={group}>
              <SelectItemGroupLabel>{group}</SelectItemGroupLabel>
              {groupItems.map((item) => (
                <SelectItem key={item.value} item={item}>
                  <SelectItemText>{item.label}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              ))}
            </SelectItemGroup>
          )}
        </SelectGroupedList>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectGrouping;
