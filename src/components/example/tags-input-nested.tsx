import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputNestedDemo = () => (
  <div className="mx-auto flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border p-3">
    <TagsInput defaultValue={["frontend", "ui"]}>
      <TagsInputScaffold label="Parent tags" />
    </TagsInput>
    <div className="ms-3 border-border border-s ps-3">
      <TagsInput defaultValue={["react"]}>
        <TagsInputScaffold label="Nested tags" />
      </TagsInput>
    </div>
  </div>
);

export default TagsInputNestedDemo;
