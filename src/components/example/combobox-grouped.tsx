import { Fragment } from "react";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxGroupedList,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxPopup,
  ComboboxSeparator,
} from "@/components/ui/combobox";

type ComboTag = {
  label: string;
  value: string;
  group: "Status" | "Priority" | "Team";
};

const COMBOBOX_TAGS: ComboTag[] = [
  { group: "Status", value: "s-open", label: "Open" },
  { group: "Status", value: "s-progress", label: "In progress" },
  { group: "Status", value: "s-done", label: "Done" },
  { group: "Priority", value: "p-low", label: "Low" },
  { group: "Priority", value: "p-high", label: "High" },
  { group: "Team", value: "t-fe", label: "Frontend" },
  { group: "Team", value: "t-be", label: "Backend" },
];

const ComboboxGroupedDemo = () => (
  <Combobox
    groupBy={(item) => item.group}
    groupSort={["Status", "Priority", "Team"]}
    items={COMBOBOX_TAGS}
  >
    <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />
    <ComboboxPopup>
      <ComboboxEmpty>No tags found.</ComboboxEmpty>
      <ComboboxGroupedList items={COMBOBOX_TAGS}>
        {([group, groupItems]) => (
          <Fragment key={group}>
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>{group}</ComboboxItemGroupLabel>
              {groupItems.map((item) => (
                <ComboboxItem key={item.value} item={item}>
                  <ComboboxItemText>{item.label}</ComboboxItemText>
                  <ComboboxItemIndicator />
                </ComboboxItem>
              ))}
            </ComboboxItemGroup>
            {group !== "Team" ? <ComboboxSeparator /> : null}
          </Fragment>
        )}
      </ComboboxGroupedList>
    </ComboboxPopup>
  </Combobox>
);

export default ComboboxGroupedDemo;
