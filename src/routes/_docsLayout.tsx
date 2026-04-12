import { createFileRoute, Outlet } from "@tanstack/react-router";
import DocProvider from "@/components/docs/doc-provider";
import DocsTOC from "@/components/docs/doc-toc";
import DocsSidebar from "@/components/docs/docs-sidebar";
import Header from "@/components/header";
import MobileMenu from "@/components/mobile-menu";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const RouteComponent = () => {
  return (
    <main className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Header
          className="border-b"
          containerClassName={cn(
            "min-[1600px]:border-x min-[1600px]:relative",
            "before:absolute before:top-[calc(var(--header-height)-4.5px)] before:left-0 before:z-1 before:-ml-1 min-[1600px]:before:size-2 before:rounded-xs before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs/5 after:absolute after:top-[calc(var(--header-height)-4.5px)] after:right-0 after:z-1 after:-mr-1 min-[1600px]:after:size-2 after:rounded-xs after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs/5 dark:after:bg-clip-border dark:before:bg-clip-border",
          )}
          mobileMenu={<MobileMenu />}
        />
        <DocProvider>
          <div className="flex flex-1 max-w-400 mx-auto w-full">
            <DocsSidebar className="min-[1600px]:border-l" />
            <SidebarInset className="bg-muted/40">
              <Outlet />
            </SidebarInset>
            <DocsTOC className="min-[1600px]:border-r" />
          </div>
        </DocProvider>
      </SidebarProvider>
    </main>
  );
};

export const Route = createFileRoute("/_docsLayout")({
  component: RouteComponent,
});
