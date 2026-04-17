import {
  Field,
  FieldDescription,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";

const FieldBasicDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Name</FieldLabel>
    <FieldInput placeholder="Enter name" />
    <FieldDescription>Visible on your profile</FieldDescription>
  </Field>
);

export default FieldBasicDemo;
