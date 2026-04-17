import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const DialogInitialFocusDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog initialFocusEl={() => inputRef.current}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Open initial focus dialog
        </Button>
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            The first input receives focus when the dialog opens.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="grid gap-3">
          <Input ref={inputRef} defaultValue="Jane Doe" aria-label="Name" />
          <Input
            defaultValue="jane@example.com"
            aria-label="Email"
            type="email"
          />
        </DialogPanel>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm" type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <Button size="sm" type="button">
            Save
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};

export default DialogInitialFocusDemo;
