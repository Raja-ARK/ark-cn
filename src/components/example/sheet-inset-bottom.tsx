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

const SheetInsetBottom = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Inset bottom
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom" variant="inset">
      <SheetHeader>
        <SheetTitle>Inset bottom</SheetTitle>
        <SheetDescription>
          Rounded inset sheet from the bottom (variant="inset", side="bottom").
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

export default SheetInsetBottom;
