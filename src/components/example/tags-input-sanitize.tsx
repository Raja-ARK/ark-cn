import { useState } from "react";
import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputSanitizeDemo = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <TagsInput
      value={value}
      onValueChange={(details) =>
        setValue(details.value.map((item) => item.trim().toLowerCase()))
      }
      className="mx-auto w-full max-w-sm"
    >
      <TagsInputScaffold label="Email addresses" placeholder="Add email" />
    </TagsInput>
  );
};

export default TagsInputSanitizeDemo;
