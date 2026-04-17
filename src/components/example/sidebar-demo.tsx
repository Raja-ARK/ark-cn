import {
  BookOpenIcon,
  BotIcon,
  FrameIcon,
  MapIcon,
  PieChartIcon,
  PlusIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

const NAV_PRIMARY = [
  { title: "Playground", icon: SquareTerminalIcon },
  { title: "Models", icon: BotIcon },
  { title: "Documentation", icon: BookOpenIcon },
  { title: "Settings", icon: Settings2Icon },
];

const NAV_PROJECTS = [
  { name: "Design Engineering", icon: FrameIcon },
  { name: "Sales & Marketing", icon: PieChartIcon },
  { name: "Travel", icon: MapIcon },
];

const SidebarDemo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar className="border-sidebar-border border-r">
        <SidebarContent className="gap-0 px-2 py-3">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {NAV_PRIMARY.map((item, index) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={index === 0}
                      className="data-[active=true]:bg-sidebar-accent data-[active=true]:shadow-none"
                    >
                      <item.icon className="opacity-90" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-4 p-0">
            <SidebarGroupLabel className="mb-1 px-2 text-[11px] text-sidebar-foreground/55 uppercase tracking-wide">
              Projects
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {NAV_PROJECTS.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton>
                      <item.icon className="opacity-90" />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <PlusIcon className="opacity-90" />
                    <span>More</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="Playground" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default SidebarDemo;
