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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

const NAV_MAIN = [
  {
    title: "Playground",
    icon: SquareTerminalIcon,
    isActive: true,
    items: [
      { title: "History", href: "#" },
      { title: "Starred", href: "#" },
      { title: "Settings", href: "#" },
    ],
  },
  {
    title: "Models",
    icon: BotIcon,
    items: [
      { title: "Genesis", href: "#" },
      { title: "Explorer", href: "#" },
      { title: "Quantum", href: "#" },
    ],
  },
  {
    title: "Documentation",
    icon: BookOpenIcon,
    items: [
      { title: "Introduction", href: "#" },
      { title: "Get Started", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings2Icon,
    items: [
      { title: "General", href: "#" },
      { title: "Team", href: "#" },
      { title: "Billing", href: "#" },
      { title: "Limits", href: "#" },
    ],
  },
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

const NavSubmenus = () => (
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
            <SidebarMenuSub>
              {item.items.map((sub) => (
                <SidebarMenuSubItem key={sub.title}>
                  <SidebarMenuSubButton
                    href={sub.href}
                    isActive={sub.title === "History"}
                  >
                    <span>{sub.title}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const Sidebar03Demo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          <NavSubmenus />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="History" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default Sidebar03Demo;
