import {
  BookOpenIcon,
  BotIcon,
  CommandIcon,
  LifeBuoyIcon,
  SendIcon,
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
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
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

const NAV_SECONDARY = [
  { title: "Support", icon: LifeBuoyIcon },
  { title: "Feedback", icon: SendIcon },
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

const SidebarInsetDemo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX} className="bg-muted">
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden bg-muted">
      <Sidebar variant="inset">
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
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>Help</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_SECONDARY.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-sidebar-border border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="User">
                <div className="flex size-8 items-center justify-center rounded-full bg-sidebar-accent">
                  <span className="font-medium text-sidebar-accent-foreground text-xs">
                    CN
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">User</span>
                  <span className="truncate text-xs text-muted-foreground">
                    user@example.com
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell
        className="border-l-0 md:min-h-0"
        header={<DemoHeader breadcrumb="Inset layout" />}
      />
    </SidebarProvider>
  </DemoFrame>
);

export default SidebarInsetDemo;
