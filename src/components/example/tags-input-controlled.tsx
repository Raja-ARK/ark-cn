import { useState } from "react";
import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputControlledDemo = () => {
  const [value, setValue] = useState<string[]>(["React", "Solid"]);
  return (
    <TagsInput
      value={value}
      onValueChange={(d) => setValue(d.value)}
      className="mx-auto w-full max-w-sm"
    >
      <TagsInputScaffold />
    </TagsInput>
  );
};

export default TagsInputControlledDemo;
