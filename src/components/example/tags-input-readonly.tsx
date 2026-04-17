import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputReadonlyDemo = () => (
  <TagsInput
    defaultValue={["React", "Solid", "Vue"]}
    readOnly
    className="mx-auto w-full max-w-sm"
  >
    <TagsInputScaffold />
  </TagsInput>
);

export default TagsInputReadonlyDemo;
