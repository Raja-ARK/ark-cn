import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertSuccess = () => (
  <Alert className="w-full max-w-md" variant="success">
    <CheckCircle2Icon />
    <AlertTitle>Success Alert</AlertTitle>
    <AlertDescription>Your settings were saved successfully.</AlertDescription>
  </Alert>
);

export default AlertSuccess;
