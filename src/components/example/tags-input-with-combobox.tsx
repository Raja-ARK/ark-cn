import { useListCollection } from "@ark-ui/react";
import {
  Combobox as ComboboxPrimitive,
  useCombobox,
} from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { CheckIcon } from "lucide-react";
import { useId } from "react";
import {
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
  TagsInputRootProvider,
  useTagsInput,
} from "@/components/ui/tags-input";

const TagsInputWithComboboxDemo = () => {
  const uid = useId();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: [
      "React",
      "Solid",
      "Vue",
      "Svelte",
      "Angular",
      "Preact",
      "Next.js",
      "Astro",
    ],
    filter: contains,
  });

  const tagsApi = useTagsInput({
    ids: { input: `tags-input-${uid}`, control: `tags-control-${uid}` },
  });

  const comboboxApi = useCombobox({
    ids: { input: `tags-input-${uid}`, control: `tags-control-${uid}` },
    collection,
    value: [],
    allowCustomValue: true,
    selectionBehavior: "clear",
    onInputValueChange: (details) => filter(details.inputValue),
    onValueChange: (details) => {
      if (details.value[0]) {
        tagsApi.addValue(details.value[0]);
      }
    },
  });

  return (
    <div className="mx-auto w-full max-w-sm">
      <ComboboxPrimitive.RootProvider value={comboboxApi}>
        <TagsInputRootProvider value={tagsApi} className="w-full">
          <TagsInputLabel>Frameworks</TagsInputLabel>
          <TagsInputContext>
            {(api) => (
              <TagsInputControl>
                {api.value.map((value, index) => (
                  <TagsInputItem
                    key={`${value}-${index}`}
                    index={index}
                    value={value}
                  >
                    <TagsInputItemPreview>
                      <TagsInputItemText>{value}</TagsInputItemText>
                      <TagsInputItemDeleteTrigger />
                    </TagsInputItemPreview>
                    <TagsInputItemInput />
                  </TagsInputItem>
                ))}
                <ComboboxPrimitive.Input asChild>
                  <TagsInputInput placeholder="Search framework" />
                </ComboboxPrimitive.Input>
                <TagsInputClearTrigger />
              </TagsInputControl>
            )}
          </TagsInputContext>
        </TagsInputRootProvider>
        <ComboboxPrimitive.Positioner>
          <ComboboxPrimitive.Content className="z-50 mt-1 max-h-56 min-w-(--reference-width) overflow-auto rounded-md border border-border bg-popover p-1 shadow-md">
            <ComboboxPrimitive.Empty className="px-2 py-1.5 text-muted-foreground text-sm">
              No frameworks found
            </ComboboxPrimitive.Empty>
            {collection.items.map((item) => (
              <ComboboxPrimitive.Item
                key={item}
                item={item}
                className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm data-highlighted:bg-accent"
              >
                <ComboboxPrimitive.ItemText>{item}</ComboboxPrimitive.ItemText>
                <ComboboxPrimitive.ItemIndicator>
                  <CheckIcon className="size-4" />
                </ComboboxPrimitive.ItemIndicator>
              </ComboboxPrimitive.Item>
            ))}
          </ComboboxPrimitive.Content>
        </ComboboxPrimitive.Positioner>
      </ComboboxPrimitive.RootProvider>
    </div>
  );
};

export default TagsInputWithComboboxDemo;
