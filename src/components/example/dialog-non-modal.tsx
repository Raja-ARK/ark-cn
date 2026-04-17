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

const DialogNonModal = () => (
  <Dialog modal={false}>
    <DialogTrigger asChild>
      <Button size="sm" variant="outline">
        Open non-modal dialog
      </Button>
    </DialogTrigger>
    <DialogPopup className="sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes here. Save when you are done.
        </DialogDescription>
      </DialogHeader>
      <DialogPanel>
        <Input defaultValue="Jane Doe" aria-label="Name" />
      </DialogPanel>
      <DialogFooter>
        <DialogClose asChild>
          <Button size="sm" variant="ghost">
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

export default DialogNonModal;
