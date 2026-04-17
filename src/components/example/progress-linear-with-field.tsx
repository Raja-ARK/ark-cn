import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { ProgressLinear } from "@/components/ui/progress-linear";

const ProgressLinearWithField = () => (
  <Field className="max-w-md">
    <FieldLabel>Task progress</FieldLabel>
    <ProgressLinear defaultValue={66} showValueText />
    <FieldDescription>
      Field label and helper; linear bar uses Root, Track, and Range.
    </FieldDescription>
  </Field>
);

export default ProgressLinearWithField;
