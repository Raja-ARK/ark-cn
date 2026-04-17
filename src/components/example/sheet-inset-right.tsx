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

const SheetInsetRight = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Inset right
      </Button>
    </SheetTrigger>
    <SheetContent side="right" variant="inset">
      <SheetHeader>
        <SheetTitle>Inset right</SheetTitle>
        <SheetDescription>
          Rounded sheet inset from the right (variant="inset", side="right").
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

export default SheetInsetRight;
