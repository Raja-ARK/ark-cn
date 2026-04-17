import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputWithFieldDemo = () => (
  <Field className="mx-auto w-full max-w-sm">
    <TagsInput>
      <TagsInputScaffold />
    </TagsInput>
    <FieldDescription>Additional info</FieldDescription>
    <FieldError>Error info</FieldError>
  </Field>
);

export default TagsInputWithFieldDemo;
