import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputDisabledEditingDemo = () => (
  <TagsInput editable={false} className="mx-auto w-full max-w-sm">
    <TagsInputScaffold />
  </TagsInput>
);

export default TagsInputDisabledEditingDemo;
