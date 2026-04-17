import { ShieldAlertIcon } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const AlertWithIconActionButtons = () => (
  <Alert className="w-full max-w-md">
    <ShieldAlertIcon />
    <AlertTitle>With Icon and Action Buttons</AlertTitle>
    <AlertDescription>
      Pair the action area with primary and secondary actions.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="outline">
        Dismiss
      </Button>
      <Button size="xs">Resolve</Button>
    </AlertAction>
  </Alert>
);

export default AlertWithIconActionButtons;
