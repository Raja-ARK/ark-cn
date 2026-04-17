import {
  BookOpenIcon,
  BotIcon,
  CommandIcon,
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const NAV_MAIN = [
  { title: "Playground", icon: SquareTerminalIcon, isActive: true },
  { title: "Models", icon: BotIcon },
  { title: "Documentation", icon: BookOpenIcon },
  { title: "Settings", icon: Settings2Icon },
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

const SidebarNoneDemo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar collapsible="none">
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
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="Fixed sidebar" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default SidebarNoneDemo;
