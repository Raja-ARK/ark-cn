import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContext,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";

const PaginationControlledDemo = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      count={120}
      page={page}
      pageSize={10}
      onPageChange={(d) => setPage(d.page)}
    >
      <PaginationContext>
        {(api) => (
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">
              Controlled page:{" "}
              <span className="font-medium text-foreground">{page}</span>{" "}
              (synced with api: {api.page})
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
};

export default PaginationControlledDemo;
