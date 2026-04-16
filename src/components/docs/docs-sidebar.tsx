import { Link, useLocation } from "@tanstack/react-router";
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
import { getDocsGroups } from "@/lib/docs-navigation";
import { cn } from "@/lib/utils";

export const DocsSidebar = ({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { toggleSidebar, isMobile, openMobile } = useSidebar();

  const location = useLocation();
  const navGroups = getDocsGroups();

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
        {navGroups.map((group) => (
          <SidebarGroup key={group.key}>
            <SidebarGroupLabel className="capitalize">
              {group.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const url = item.url === "/" ? "/docs" : "/docs" + item.url;
                  const isActive = location.pathname === url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link
                          to={url}
                          params={{ _splat: url }}
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
