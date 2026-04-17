import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AlertDialogBareFooter = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button size="sm" variant="outline">
        Alert Dialog with Bare Footer
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Alert Dialog with Bare Footer</AlertDialogTitle>
        <AlertDialogDescription>
          Use a simplified footer for lighter confirmation flows.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter variant="bare">
        <AlertDialogCancel asChild>
          <Button size="sm" variant="ghost">
            Not now
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button size="sm">Proceed</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
export default AlertDialogBareFooter;
