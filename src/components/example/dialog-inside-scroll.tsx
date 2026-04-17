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

const sections = [
  {
    body: "By using this service, you agree to be bound by these terms and conditions.",
    title: "1. Acceptance of terms",
  },
  {
    body: "Permission is granted to use this service for personal and internal business use.",
    title: "2. Use license",
  },
  {
    body: "You are responsible for keeping your account credentials confidential.",
    title: "3. User responsibilities",
  },
  {
    body: "Your use of this service is subject to our privacy and data retention policy.",
    title: "4. Privacy policy",
  },
  {
    body: "We may update these terms at any time. Continued use means acceptance.",
    title: "5. Revisions",
  },
];

const DialogInsideScrollDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="sm" variant="outline">
        Open inside scroll dialog
      </Button>
    </DialogTrigger>
    <DialogPopup className="sm:max-w-md" showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Terms of service</DialogTitle>
        <DialogDescription>
          This follows Ark UI&apos;s inside-scroll dialog pattern.
        </DialogDescription>
      </DialogHeader>
      <DialogPanel className="max-h-72 overflow-y-auto pr-2">
        <div className="grid gap-4">
          {sections.map((section) => (
            <section className="grid gap-1" key={section.title}>
              <h4 className="font-medium text-sm">{section.title}</h4>
              <p className="text-muted-foreground text-sm">{section.body}</p>
            </section>
          ))}
        </div>
      </DialogPanel>
      <DialogFooter>
        <DialogClose asChild>
          <Button size="sm" type="button" variant="ghost">
            Decline
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button size="sm" type="button">
            Accept
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogPopup>
  </Dialog>
);

export default DialogInsideScrollDemo;
