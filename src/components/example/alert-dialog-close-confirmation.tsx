import { AlertTriangleIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AlertDialogCloseConfirmation = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button size="sm" variant="destructive-outline">
        Close Confirmation
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia className="bg-destructive/10 text-destructive">
          <AlertTriangleIcon className="size-6" />
        </AlertDialogMedia>
        <AlertDialogTitle>Close without saving?</AlertDialogTitle>
        <AlertDialogDescription>
          You have unsaved changes in this form. Closing now will discard them.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button size="sm" variant="ghost">
            Keep editing
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button size="sm" variant="destructive">
            Close anyway
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogCloseConfirmation;
