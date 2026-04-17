import {
  TagsInputRootProvider,
  TagsInputScaffold,
  useTagsInput,
} from "@/components/ui/tags-input";

const TagsInputRootProviderDemo = () => {
  const api = useTagsInput();
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
      <TagsInputRootProvider value={api} className="w-full">
        <TagsInputScaffold />
      </TagsInputRootProvider>
      <p className="text-muted-foreground text-xs">
        values: {JSON.stringify(api.value)}
      </p>
    </div>
  );
};

export default TagsInputRootProviderDemo;
