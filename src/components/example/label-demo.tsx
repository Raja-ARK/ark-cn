import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabelDemo = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="name@example.com" type="email" />
    </div>
  );
};

export default LabelDemo;
