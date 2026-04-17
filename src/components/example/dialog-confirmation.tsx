import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogRootProvider,
  DialogTitle,
  useDialog,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const DialogConfirmationDemo = () => {
  const [formContent, setFormContent] = useState("");

  const confirmDialog = useDialog();
  const parentDialog = useDialog({
    onOpenChange: (details) => {
      if (!details.open && formContent.trim()) {
        confirmDialog.setOpen(true);
        return;
      }
      confirmDialog.setOpen(false);
      if (!details.open) {
        setFormContent("");
      }
    },
  });

  const handleDiscardChanges = () => {
    setFormContent("");
    confirmDialog.setOpen(false);
    parentDialog.setOpen(false);
  };

  return (
    <>
      <Button
        size="sm"
        type="button"
        variant="outline"
        onClick={() => parentDialog.setOpen(true)}
      >
        Open confirmation dialog
      </Button>

      <DialogRootProvider value={parentDialog}>
        <DialogPopup className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit content</DialogTitle>
            <DialogDescription>
              Try typing and then closing. A confirmation dialog appears before
              discarding changes.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel>
            <Textarea
              value={formContent}
              onChange={(event) => setFormContent(event.target.value)}
              placeholder="Type something here..."
              rows={4}
            />
          </DialogPanel>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm" type="button" variant="ghost">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogRootProvider>

      <DialogRootProvider value={confirmDialog}>
        <DialogPopup className="sm:max-w-sm" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Unsaved changes</DialogTitle>
            <DialogDescription>
              You have unsaved changes. Do you want to discard them?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              size="sm"
              type="button"
              variant="ghost"
              onClick={() => confirmDialog.setOpen(false)}
            >
              Keep editing
            </Button>
            <Button size="sm" type="button" onClick={handleDiscardChanges}>
              Discard changes
            </Button>
          </DialogFooter>
        </DialogPopup>
      </DialogRootProvider>
    </>
  );
};

export default DialogConfirmationDemo;
