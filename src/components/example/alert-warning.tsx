import { CircleAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertWarning = () => (
  <Alert className="w-full max-w-md" variant="warning">
    <CircleAlertIcon />
    <AlertTitle>Warning Alert</AlertTitle>
    <AlertDescription>
      Storage is almost full. Clean up large files.
    </AlertDescription>
  </Alert>
);

export default AlertWarning;
