import {
  Checkbox,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";

const CheckboxDescriptionDemo = () => (
  <CheckboxRoot className="items-start">
    <Checkbox className="mt-0.5" />
    <div className="space-y-1">
      <CheckboxLabel>Email updates</CheckboxLabel>
      <p className="text-muted-foreground text-xs">
        Receive new release and changelog notifications.
      </p>
    </div>
  </CheckboxRoot>
);

export default CheckboxDescriptionDemo;
