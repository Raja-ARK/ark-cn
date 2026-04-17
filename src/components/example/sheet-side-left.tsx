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

const SheetSideLeft = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Open from left
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Left sheet</SheetTitle>
        <SheetDescription>
          Edge sheet from the left (side="left").
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose asChild>
          <Button size="sm">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default SheetSideLeft;
