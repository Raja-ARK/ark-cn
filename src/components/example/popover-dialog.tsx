import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverDialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button type="button" variant="outline">
        Open dialog
      </Button>
    </DialogTrigger>
    <DialogPopup>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Dialog stacking with a popover inside (lazy mount + unmount on exit).
      </DialogDescription>
      <DialogPanel>
        <Popover lazyMount unmountOnExit>
          <PopoverTrigger asChild>
            <Button size="sm" type="button" variant="secondary">
              More options
            </Button>
          </PopoverTrigger>
          <PopoverPopup>
            <PopoverTitle>Additional settings</PopoverTitle>
            <PopoverDescription>
              Renders above the dialog layer when portalled.
            </PopoverDescription>
          </PopoverPopup>
        </Popover>
      </DialogPanel>
    </DialogPopup>
  </Dialog>
);

export default PopoverDialogDemo;
