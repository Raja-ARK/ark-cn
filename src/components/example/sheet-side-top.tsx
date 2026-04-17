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

const SheetSideTop = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Open from top
      </Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Top sheet</SheetTitle>
        <SheetDescription>
          Edge sheet from the top (side="top").
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

export default SheetSideTop;
