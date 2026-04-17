import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationFirstTrigger,
  PaginationItems,
  PaginationLastTrigger,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";

const PaginationButtonGroupDemo = () => (
  <Pagination
    className="flex flex-wrap items-center gap-1.5"
    count={50}
    pageSize={10}
    siblingCount={1}
  >
    <PaginationFirstTrigger aria-label="First page" asChild>
      <Button variant="outline">
        <ChevronsLeftIcon className="size-4" />
      </Button>
    </PaginationFirstTrigger>
    <PaginationPrevTrigger aria-label="Previous page" asChild>
      <Button variant="outline">
        <ChevronLeftIcon className="size-4" />
      </Button>
    </PaginationPrevTrigger>
    <PaginationItems />
    <PaginationNextTrigger aria-label="Next page" asChild>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="size-4" />
      </Button>
    </PaginationNextTrigger>
    <PaginationLastTrigger aria-label="Last page" asChild>
      <Button variant="outline" size="icon">
        <ChevronsRightIcon className="size-4" />
      </Button>
    </PaginationLastTrigger>
  </Pagination>
);

export default PaginationButtonGroupDemo;
