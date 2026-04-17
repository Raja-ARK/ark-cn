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

const SheetInsetLeft = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Inset left
      </Button>
    </SheetTrigger>
    <SheetContent side="left" variant="inset">
      <SheetHeader>
        <SheetTitle>Inset left</SheetTitle>
        <SheetDescription>
          Rounded inset sheet from the left (variant="inset", side="left").
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

export default SheetInsetLeft;
