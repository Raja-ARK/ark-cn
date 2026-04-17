import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabelRequired = () => {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      <Label htmlFor="full-name">
        Full name
        <span aria-hidden className="text-destructive">
          *
        </span>
      </Label>
      <Input id="full-name" placeholder="Ada Lovelace" />
      <p className="text-muted-foreground text-xs">Required field</p>
    </div>
  );
};

export default LabelRequired;
