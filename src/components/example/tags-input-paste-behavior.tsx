import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputPasteBehaviorDemo = () => (
  <TagsInput addOnPaste delimiter="," className="mx-auto w-full max-w-sm">
    <TagsInputScaffold />
  </TagsInput>
);

export default TagsInputPasteBehaviorDemo;
