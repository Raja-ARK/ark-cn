import { Link, useLocation } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export const DocsSidebar = ({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { toggleSidebar, isMobile, openMobile } = useSidebar();

  const location = useLocation();

  const navItems = allDocs
    .sort((a, b) => a.id - b.id)
    .reduce(
      (acc, section) => {
        const directory = section._meta.directory;

        if (!acc[directory]) {
          acc[directory] = {
            title: directory === "." ? "Overview" : directory,
            items: [],
          };
        }

        acc[directory].items.push({
          title: section.title,
          url: section.url === "/" ? "/docs" : "/docs" + section.url,
        });

        return acc;
      },
      {} as Record<
        string,
        {
          title: string;
          items: { title: string | null; url: string }[];
        }
      >,
    );

  return (
    <Sidebar
      className={cn(
        "sticky top-(--header-height) h-[calc(100svh-var(--header-height))]! group-data-[side=left]:border-r-0 z-0",
        className,
      )}
      side="left"
      {...props}
    >
      <SidebarContent>
        {Object.entries(navItems)?.map(([key, section]) => (
          <SidebarGroup key={key}>
            <SidebarGroupLabel className="capitalize">
              {section.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link
                          to={item.url}
                          params={{ _splat: item.url }}
                          onClick={() => {
                            if (isMobile && openMobile) {
                              toggleSidebar();
                            }
                          }}
                        >
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default DocsSidebar;
