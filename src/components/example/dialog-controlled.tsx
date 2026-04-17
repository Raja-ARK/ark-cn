import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(details) => setOpen(details.open)}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Open controlled dialog
        </Button>
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Session settings</DialogTitle>
          <DialogDescription>
            This dialog is controlled with React state and Ark&apos;s
            `onOpenChange`.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            size="sm"
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};

export default DialogControlledDemo;
