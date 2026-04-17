import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputDisabledDemo = () => (
  <TagsInput
    defaultValue={["React", "Solid", "Vue"]}
    disabled
    className="mx-auto w-full max-w-sm"
  >
    <TagsInputScaffold />
  </TagsInput>
);

export default TagsInputDisabledDemo;
