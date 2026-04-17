import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "./sidebar";
import { ThemeCustomizeProvider } from "./theme-customize-context";
import ThemeMainContent from "./theme-main-content";

export const ThemeCustomize = () => {
  return (
    <main className="[--header-height:calc(--spacing(14))] overflow-x-clip">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",
          } as React.CSSProperties
        }
        className="flex flex-col"
      >
        <Header className="border-b shrink-0" />
        <ThemeCustomizeProvider>
          <div className="flex flex-1 w-full max-w-400 mx-auto">
            <Sidebar />
            <SidebarInset>
              <ThemeMainContent />
            </SidebarInset>
          </div>
        </ThemeCustomizeProvider>
      </SidebarProvider>
    </main>
  );
};
