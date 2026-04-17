import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const VALID_TAG_PATTERN = /^[a-zA-Z0-9-]+$/;

const TagsInputValidationDemo = () => (
  <TagsInput
    validate={({ value, inputValue }) =>
      Boolean(inputValue?.trim()) &&
      !value.includes(inputValue) &&
      inputValue.length >= 3 &&
      VALID_TAG_PATTERN.test(inputValue)
    }
    className="mx-auto w-full max-w-sm"
  >
    <TagsInputScaffold label="Min 3 chars, alphanumeric + hyphen" />
  </TagsInput>
);

export default TagsInputValidationDemo;
