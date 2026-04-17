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

const NAV_PROJECTS = [
  { name: "Design Engineering", icon: FrameIcon, href: "#" },
  { name: "Sales & Marketing", icon: PieChartIcon, href: "#" },
  { name: "Travel", icon: MapIcon, href: "#" },
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

const Sidebar01Demo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar>
        <SidebarHeader className="border-sidebar-border border-b">
          <SidebarInput placeholder="Search…" />
        </SidebarHeader>
        <SidebarContent>
          <NavGrouped />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader />} />
    </SidebarProvider>
  </DemoFrame>
);

export default Sidebar01Demo;
