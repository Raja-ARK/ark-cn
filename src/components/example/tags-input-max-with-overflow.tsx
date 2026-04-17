import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputMaxWithOverflowDemo = () => (
  <TagsInput allowOverflow max={3} className="mx-auto w-full max-w-sm">
    <TagsInputScaffold />
  </TagsInput>
);

export default TagsInputMaxWithOverflowDemo;
