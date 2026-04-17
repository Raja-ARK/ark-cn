import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContext,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";

const PaginationContextInfoDemo = () => (
  <Pagination count={55} pageSize={10}>
    <PaginationContext>
      {(api) => (
        <div className="flex flex-col gap-2">
          <p className="rounded-md border border-border/80 bg-muted/40 px-2 py-1.5 text-foreground text-xs">
            pageRange: {api.pageRange.start}–{api.pageRange.end} of {api.count}{" "}
            · totalPages: {api.totalPages}
          </p>
          <div className="flex flex-wrap items-center gap-1">
            <PaginationPrevTrigger asChild>
              <Button size="icon" variant="outline">
                <ChevronLeftIcon className="size-4" />
              </Button>
            </PaginationPrevTrigger>
            <PaginationItems />
            <PaginationNextTrigger asChild>
              <Button size="icon" variant="outline">
                <ChevronRightIcon className="size-4" />
              </Button>
            </PaginationNextTrigger>
          </div>
        </div>
      )}
    </PaginationContext>
  </Pagination>
);

export default PaginationContextInfoDemo;
