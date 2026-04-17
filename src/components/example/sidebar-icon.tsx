import {
  BookOpenIcon,
  BotIcon,
  CommandIcon,
  FrameIcon,
  MapIcon,
  MoreHorizontalIcon,
  PieChartIcon,
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
  SidebarHeader,
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
  { name: "Design", icon: FrameIcon },
  { name: "Marketing", icon: PieChartIcon },
  { name: "Travel", icon: MapIcon },
];

const TeamSwitcher = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" tooltip="Acme Inc">
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

const SidebarIconDemo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_MAIN.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      tooltip={item.title}
                    >
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
                    <SidebarMenuButton tooltip={item.name}>
                      <item.icon />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                    <SidebarMenuAction showOnHover aria-label="More">
                      <MoreHorizontalIcon />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell
        header={<DemoHeader breadcrumb="Icon mode (⌘/Ctrl+B)" />}
      />
    </SidebarProvider>
  </DemoFrame>
);

export default SidebarIconDemo;
