import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TAG_DELIMITER = /[,;\s]/;

const TagsInputDelimiterDemo = () => (
  <TagsInput delimiter={TAG_DELIMITER} className="mx-auto w-full max-w-sm">
    <TagsInputScaffold placeholder="comma, semicolon or space" />
  </TagsInput>
);

export default TagsInputDelimiterDemo;
