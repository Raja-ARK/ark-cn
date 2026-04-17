import {
  BookOpenIcon,
  BotIcon,
  ChevronRightIcon,
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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

const NAV_SECONDARY = [
  { title: "Support", icon: LifeBuoyIcon, href: "#" },
  { title: "Feedback", icon: SendIcon, href: "#" },
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

const NavCollapsible = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {NAV_MAIN.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <item.icon />
                  <span>{item.title}</span>
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((sub) => (
                    <SidebarMenuSubItem key={sub.title}>
                      <SidebarMenuSubButton href={sub.href}>
                        <span>{sub.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const NavUser = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" tooltip="User">
        <div className="flex size-8 items-center justify-center rounded-full bg-sidebar-accent">
          <span className="font-medium text-sidebar-accent-foreground text-xs">
            CN
          </span>
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">shadcn</span>
          <span className="truncate text-xs text-muted-foreground">
            m@example.com
          </span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const NavSecondary = () => (
  <SidebarGroup className="mt-auto">
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
);

const Sidebar02Demo = () => (
  <DemoFrame height={SIDEBAR_DEMO_FRAME_HEIGHT_PX}>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          <NavCollapsible />
          <NavSecondary />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="Get Started" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default Sidebar02Demo;
