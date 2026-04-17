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

const SheetInsetTop = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">
        Inset top
      </Button>
    </SheetTrigger>
    <SheetContent side="top" variant="inset">
      <SheetHeader>
        <SheetTitle>Inset top</SheetTitle>
        <SheetDescription>
          Rounded inset sheet from the top (variant="inset", side="top").
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

export default SheetInsetTop;
