import {
  Field,
  FieldDescription,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";

const FieldsetBillingDemo = () => (
  <Fieldset className="max-w-md">
    <FieldsetLegend>Billing details</FieldsetLegend>
    <Field>
      <FieldLabel>Company</FieldLabel>
      <FieldInput placeholder="Enter company name" type="text" />
      <FieldDescription>
        The name that will appear on invoices.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Tax ID</FieldLabel>
      <FieldInput placeholder="Enter tax identification number" type="text" />
      <FieldDescription>
        Your business tax identification number.
      </FieldDescription>
    </Field>
  </Fieldset>
);

export default FieldsetBillingDemo;
