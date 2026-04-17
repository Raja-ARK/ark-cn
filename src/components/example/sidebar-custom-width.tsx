import {
  BookOpenIcon,
  BotIcon,
  FrameIcon,
  MapIcon,
  MoreHorizontalIcon,
  PieChartIcon,
  PlusIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import {
  DemoFrame,
  DemoHeader,
  DemoInsetShell,
  SIDEBAR_DEMO_FRAME_HEIGHT_PX,
} from "@/components/example/sidebar-demos-shared";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

const NAV_MAIN = [
  { title: "Playground", icon: SquareTerminalIcon, isActive: true },
  { title: "Models", icon: BotIcon },
  { title: "Documentation", icon: BookOpenIcon },
  { title: "Settings", icon: Settings2Icon },
];

const NAV_PROJECTS = [
  { name: "Design Engineering", icon: FrameIcon },
  { name: "Sales & Marketing", icon: PieChartIcon },
  { name: "Travel", icon: MapIcon },
];

const NavGrouped = () => (
  <>
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {NAV_MAIN.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={item.isActive}>
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {NAV_PROJECTS.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton>
                <item.icon />
                <span>{item.name}</span>
              </SidebarMenuButton>
              <SidebarMenuAction showOnHover aria-label="More">
                <MoreHorizontalIcon />
              </SidebarMenuAction>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton>
              <PlusIcon />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </>
);

const SidebarCustomWidthDemo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider
      className="flex h-full min-h-0 w-full overflow-hidden"
      style={
        {
          "--sidebar-width": "19rem",
        } as CSSProperties
      }
    >
      <Sidebar>
        <SidebarHeader className="border-sidebar-border border-b">
          <SidebarInput placeholder="Search…" />
        </SidebarHeader>
        <SidebarContent>
          <NavGrouped />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="Custom width" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default SidebarCustomWidthDemo;
