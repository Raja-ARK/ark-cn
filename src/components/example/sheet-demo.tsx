import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetDemo = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Open sheet
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes here. Click save when you are done.
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose asChild>
          <Button size="sm">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default SheetDemo;
