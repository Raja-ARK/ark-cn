import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputMaxTagLengthDemo = () => (
  <TagsInput maxLength={10} className="mx-auto w-full max-w-sm">
    <TagsInputScaffold label="Frameworks (max 10 chars)" />
  </TagsInput>
);

export default TagsInputMaxTagLengthDemo;
