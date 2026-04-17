import { ShieldAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const AlertError = () => (
  <Alert className="w-full max-w-md" variant="error">
    <ShieldAlertIcon />
    <AlertTitle>Error Alert</AlertTitle>
    <AlertDescription>Unable to connect to the API right now.</AlertDescription>
  </Alert>
);

export default AlertError;
