import {
  CalendarIcon,
  CommandIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  Settings2Icon,
} from "lucide-react";
import { useState } from "react";
import {
  DemoFrame,
  DemoHeader,
  DemoInsetShell,
  SIDEBAR_DEMO_FRAME_HEIGHT_PX,
} from "@/components/example/sidebar-demos-shared";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

const NAV_FLAT = [
  { title: "Home", icon: HomeIcon, href: "#" },
  { title: "Inbox", icon: InboxIcon, href: "#", badge: "12" },
  { title: "Calendar", icon: CalendarIcon, href: "#" },
  { title: "Search", icon: SearchIcon, href: "#" },
  { title: "Settings", icon: Settings2Icon, href: "#" },
];

const TeamSwitcher = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg">
        <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <CommandIcon className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Acme Inc</span>
          <span className="truncate text-xs">Enterprise</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const NavFlat = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {NAV_FLAT.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              isActive={item.title === "Home"}
              tooltip={item.title}
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
            {item.badge ? (
              <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const SidebarControlledDemo = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close sidebar" : "Open sidebar"}
        </Button>
      </div>
      <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
        <SidebarProvider
          className="flex h-full min-h-0 w-full overflow-hidden"
          open={open}
          onOpenChange={setOpen}
        >
          <Sidebar collapsible="offcanvas">
            <SidebarHeader>
              <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent>
              <NavFlat />
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <DemoInsetShell header={<DemoHeader breadcrumb="Controlled" />} />
        </SidebarProvider>
      </DemoFrame>
    </div>
  );
};

export default SidebarControlledDemo;
