import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";

const PaginationDefaultDemo = () => (
  <Pagination
    count={100}
    pageSize={10}
    className="flex flex-wrap items-center gap-1"
  >
    <PaginationPrevTrigger asChild aria-label="Previous page">
      <Button size="icon" variant="outline">
        <ChevronLeftIcon className="size-4" />
      </Button>
    </PaginationPrevTrigger>
    <PaginationItems />
    <PaginationNextTrigger asChild aria-label="Next page">
      <Button size="icon" variant="outline">
        <ChevronRightIcon className="size-4" />
      </Button>
    </PaginationNextTrigger>
  </Pagination>
);

export default PaginationDefaultDemo;
