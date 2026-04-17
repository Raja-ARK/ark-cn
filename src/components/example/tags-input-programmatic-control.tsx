import { Button } from "@/components/ui/button";
import {
  TagsInputRootProvider,
  TagsInputScaffold,
  useTagsInput,
} from "@/components/ui/tags-input";

const TagsInputProgrammaticControlDemo = () => {
  const api = useTagsInput();

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => api.addValue("React")}
          size="sm"
          variant="outline"
        >
          Add React
        </Button>
        <Button
          onClick={() => api.addValue("Solid")}
          size="sm"
          variant="outline"
        >
          Add Solid
        </Button>
        <Button
          onClick={() => api.setValue(["Vue", "Svelte"])}
          size="sm"
          variant="outline"
        >
          Set Vue + Svelte
        </Button>
        <Button onClick={() => api.clearValue()} size="sm" variant="outline">
          Clear all
        </Button>
      </div>
      <TagsInputRootProvider value={api} className="w-full">
        <TagsInputScaffold />
      </TagsInputRootProvider>
    </div>
  );
};

export default TagsInputProgrammaticControlDemo;
