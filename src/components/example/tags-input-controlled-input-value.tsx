import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TagsInput, TagsInputScaffold } from "@/components/ui/tags-input";

const TagsInputControlledInputValueDemo = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setInputValue("React")}
          size="sm"
          variant="outline"
        >
          Set "React"
        </Button>
        <Button onClick={() => setInputValue("")} size="sm" variant="outline">
          Clear
        </Button>
      </div>
      <TagsInput
        inputValue={inputValue}
        onInputValueChange={(d) => setInputValue(d.inputValue)}
        className="w-full"
      >
        <TagsInputScaffold />
      </TagsInput>
    </div>
  );
};

export default TagsInputControlledInputValueDemo;
