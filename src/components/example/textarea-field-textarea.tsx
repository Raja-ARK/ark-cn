import {
  Field,
  FieldDescription,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const FieldTextareaDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Bio</FieldLabel>
    <FieldInput asChild>
      <Textarea placeholder="Tell us about yourself…" />
    </FieldInput>
    <FieldDescription>
      Write a short bio. Maximum 500 characters.
    </FieldDescription>
  </Field>
);

export default FieldTextareaDemo;
