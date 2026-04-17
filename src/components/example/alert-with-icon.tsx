import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertWithIcon = () => (
  <Alert className="w-full max-w-md">
    <InfoIcon />
    <AlertTitle>With Icon</AlertTitle>
    <AlertDescription>
      Add an icon as the first child to provide quick context.
    </AlertDescription>
  </Alert>
);

export default AlertWithIcon;
