import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";

const PaginationLinksDemo = () => (
  <Pagination
    count={60}
    getPageUrl={({ page }) => `#pagination-page-${page}`}
    pageSize={10}
    type="link"
  >
    <div className="flex flex-wrap items-center gap-1">
      <PaginationPrevTrigger asChild>
        <Button variant="outline">
          <ChevronLeftIcon className="size-4" />
          Previous
        </Button>
      </PaginationPrevTrigger>
      <PaginationItems />
      <PaginationNextTrigger asChild>
        <Button variant="outline">Next</Button>
      </PaginationNextTrigger>
    </div>
  </Pagination>
);

export default PaginationLinksDemo;
