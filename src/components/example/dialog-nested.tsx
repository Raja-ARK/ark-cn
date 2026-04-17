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
import { Input } from "@/components/ui/input";

const DialogNestedDemo = () => {
  const parentDialog = useDialog();
  const childDialog = useDialog();

  return (
    <>
      <Button
        size="sm"
        type="button"
        variant="outline"
        onClick={() => parentDialog.setOpen(true)}
      >
        Open parent
      </Button>

      <DialogRootProvider value={parentDialog}>
        <DialogPopup className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Manage team member</DialogTitle>
            <DialogDescription>
              Two sibling{" "}
              <code className="rounded bg-muted px-1 py-px text-xs">
                DialogRootProvider
              </code>{" "}
              trees with{" "}
              <code className="rounded bg-muted px-1 py-px text-xs">
                useDialog
              </code>
              . When the child is open, the parent panel gets{" "}
              <code className="rounded bg-muted px-1 py-px text-xs">
                data-has-nested
              </code>{" "}
              and scales down.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel className="grid gap-4">
            <div className="grid gap-1">
              <p className="text-muted-foreground text-sm">Name</p>
              <p className="font-medium text-sm">Bora Baloglu</p>
            </div>
            <div className="grid gap-1">
              <p className="text-muted-foreground text-sm">Email</p>
              <p className="font-medium text-sm">bora@example.com</p>
            </div>
          </DialogPanel>
          <DialogFooter>
            <Button
              size="sm"
              type="button"
              variant="outline"
              onClick={() => childDialog.setOpen(true)}
            >
              Edit details
            </Button>
          </DialogFooter>
        </DialogPopup>
      </DialogRootProvider>

      <DialogRootProvider value={childDialog}>
        <DialogPopup className="sm:max-w-sm" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Edit details</DialogTitle>
            <DialogDescription>
              Update member information below.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel className="grid gap-4">
            <Input defaultValue="Bora Baloglu" aria-label="Name" />
            <Input
              defaultValue="bora@example.com"
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
              Save changes
            </Button>
          </DialogFooter>
        </DialogPopup>
      </DialogRootProvider>
    </>
  );
};

export default DialogNestedDemo;
