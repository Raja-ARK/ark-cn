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

const SheetSideBottom = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Open from bottom
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Bottom sheet</SheetTitle>
        <SheetDescription>
          Edge sheet from the bottom (side="bottom").
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

export default SheetSideBottom;
