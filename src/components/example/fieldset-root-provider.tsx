import { Field, FieldInput, FieldLabel } from "@/components/ui/field";
import {
  FieldsetLegend,
  FieldsetRootProvider,
  useFieldset,
} from "@/components/ui/fieldset";

const FieldsetRootProviderDemo = () => {
  const fieldset = useFieldset({ id: "showcase-fieldset-provider" });
  return (
    <FieldsetRootProvider
      className="flex w-full max-w-md min-w-0 flex-col gap-3 border-0 p-0 text-foreground"
      value={fieldset}
    >
      <FieldsetLegend {...fieldset.getLegendProps()}>
        Contact details
      </FieldsetLegend>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <FieldInput placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldInput placeholder="john@example.com" type="email" />
      </Field>
    </FieldsetRootProvider>
  );
};

export default FieldsetRootProviderDemo;
