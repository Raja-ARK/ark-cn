"use client";

import { ark } from "@ark-ui/react/factory";
import { mergeProps } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import {
  type ComponentProps,
  type CSSProperties,
  createContext,
  type ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, type InputProps } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContext,
  TooltipPopup,
  type TooltipPopupProps,
} from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "14rem";
const SIDEBAR_WIDTH_MOBILE = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextValue = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean | ((value: boolean) => boolean)) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = use(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};

export type SidebarProviderProps = ComponentProps<typeof ark.div> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      // biome-ignore lint/suspicious/noDocumentCookie: persist sidebar state for layout
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((v) => !v) : setOpen((v) => !v);
  }, [isMobile, setOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextValue>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <ark.div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as CSSProperties
        }
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          className,
        )}
        {...props}
      >
        {children}
      </ark.div>
    </SidebarContext.Provider>
  );
};

export type SidebarProps = ComponentProps<typeof ark.div> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
};

export const Sidebar = ({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarProps) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <ark.div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </ark.div>
    );
  }

  if (isMobile) {
    return (
      <Sheet
        open={openMobile}
        onOpenChange={(details) => setOpenMobile(details.open)}
      >
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          showCloseButton={false}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <ark.div className="flex h-dvh w-full flex-col">{children}</ark.div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <ark.div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <ark.div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      <ark.div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <ark.div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </ark.div>
      </ark.div>
    </ark.div>
  );
};

export type SidebarTriggerProps = ComponentProps<typeof Button>;

export const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export type SidebarRailProps = ComponentProps<typeof ark.button>;

export const SidebarRail = ({ className, ...props }: SidebarRailProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <ark.button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      type="button"
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
};

export type SidebarInsetProps = ComponentProps<typeof ark.main>;

export const SidebarInset = ({ className, ...props }: SidebarInsetProps) => (
  <ark.main
    data-slot="sidebar-inset"
    className={cn(
      "relative flex w-full flex-1 flex-col overflow-x-auto bg-background",
      "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
      className,
    )}
    {...props}
  />
);

export type SidebarInputProps = InputProps;

export const SidebarInput = ({ className, ...props }: SidebarInputProps) => (
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    className={cn("h-8 w-full bg-background shadow-none", className)}
    {...props}
  />
);

export type SidebarHeaderProps = ComponentProps<typeof ark.div>;

export const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => (
  <ark.div
    data-slot="sidebar-header"
    data-sidebar="header"
    className={cn("flex flex-col gap-2 p-2", className)}
    {...props}
  />
);

export type SidebarFooterProps = ComponentProps<typeof ark.div>;

export const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => (
  <ark.div
    data-slot="sidebar-footer"
    data-sidebar="footer"
    className={cn("flex flex-col gap-2 p-2", className)}
    {...props}
  />
);

export type SidebarSeparatorProps = ComponentProps<typeof Separator>;

export const SidebarSeparator = ({
  className,
  ...props
}: SidebarSeparatorProps) => (
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    className={cn("mx-2 w-auto bg-sidebar-border", className)}
    {...props}
  />
);

export type SidebarContentProps = ComponentProps<typeof ark.div>;

export const SidebarContent = ({
  className,
  ...props
}: SidebarContentProps) => (
  <ark.div
    data-slot="sidebar-content"
    data-sidebar="content"
    className={cn(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      className,
    )}
    {...props}
  />
);

export type SidebarGroupProps = ComponentProps<typeof ark.div>;

export const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => (
  <ark.div
    data-slot="sidebar-group"
    data-sidebar="group"
    className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
    {...props}
  />
);

export type SidebarGroupLabelProps = ComponentProps<typeof ark.div>;

export const SidebarGroupLabel = ({
  className,
  ...props
}: SidebarGroupLabelProps) => (
  <ark.div
    data-slot="sidebar-group-label"
    data-sidebar="group-label"
    className={cn(
      "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      className,
    )}
    {...props}
  />
);

export type SidebarGroupActionProps = ComponentProps<typeof ark.button>;

export const SidebarGroupAction = ({
  className,
  ...props
}: SidebarGroupActionProps) => (
  <ark.button
    type="button"
    data-slot="sidebar-group-action"
    data-sidebar="group-action"
    className={cn(
      "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "after:absolute after:-inset-2 md:after:hidden",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
);

export type SidebarGroupContentProps = ComponentProps<typeof ark.div>;

export const SidebarGroupContent = ({
  className,
  ...props
}: SidebarGroupContentProps) => (
  <ark.div
    data-slot="sidebar-group-content"
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
);

export type SidebarMenuProps = ComponentProps<typeof ark.ul>;

export const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => (
  <ark.ul
    data-slot="sidebar-menu"
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
);

export type SidebarMenuItemProps = ComponentProps<typeof ark.li>;

export const SidebarMenuItem = ({
  className,
  ...props
}: SidebarMenuItemProps) => (
  <ark.li
    data-slot="sidebar-menu-item"
    data-sidebar="menu-item"
    className={cn("group/menu-item relative list-none", className)}
    {...props}
  />
);

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type SidebarMenuButtonProps = ComponentProps<typeof ark.button> & {
  isActive?: boolean;
  tooltip?: string | TooltipPopupProps;
} & VariantProps<typeof sidebarMenuButtonVariants>;

export const SidebarMenuButton = ({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) => {
  const { isMobile, state } = useSidebar();
  const buttonClass = cn(
    sidebarMenuButtonVariants({ variant, size }),
    className,
  );

  const plainButton = (
    <ark.button
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      type="button"
      className={buttonClass}
      {...props}
    />
  );

  if (!tooltip) {
    return plainButton;
  }

  let popupProps: TooltipPopupProps = {};
  let label: ReactNode = null;
  if (typeof tooltip === "string") {
    label = tooltip;
  } else {
    const { children: tipChildren, ...rest } = tooltip;
    label = tipChildren;
    popupProps = rest;
  }

  return (
    <Tooltip
      positioning={{ placement: "right" }}
      open={state !== "collapsed" || isMobile ? false : undefined}
    >
      <TooltipContext>
        {(tt) => (
          <>
            <ark.button
              {...mergeProps(tt.getTriggerProps(), props)}
              data-slot="sidebar-menu-button"
              data-sidebar="menu-button"
              data-size={size}
              data-active={isActive}
              type="button"
              className={buttonClass}
            />
            <TooltipPopup showArrow {...popupProps}>
              {label}
            </TooltipPopup>
          </>
        )}
      </TooltipContext>
    </Tooltip>
  );
};

export type SidebarMenuActionProps = ComponentProps<typeof ark.button> & {
  showOnHover?: boolean;
};

export const SidebarMenuAction = ({
  className,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) => (
  <ark.button
    type="button"
    data-slot="sidebar-menu-action"
    data-sidebar="menu-action"
    className={cn(
      "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
      "after:absolute after:-inset-2 md:after:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      showOnHover &&
        "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      className,
    )}
    {...props}
  />
);

export type SidebarMenuBadgeProps = ComponentProps<typeof ark.div>;

export const SidebarMenuBadge = ({
  className,
  ...props
}: SidebarMenuBadgeProps) => (
  <ark.div
    data-slot="sidebar-menu-badge"
    data-sidebar="menu-badge"
    className={cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
);

export type SidebarMenuSkeletonProps = ComponentProps<typeof ark.div> & {
  showIcon?: boolean;
};

export const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);

  return (
    <ark.div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon ? (
        <ark.div
          className="size-4 shrink-0 animate-pulse rounded-md bg-sidebar-accent"
          data-sidebar="menu-skeleton-icon"
        />
      ) : null}
      <ark.div
        className="h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-sidebar-accent"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </ark.div>
  );
};

export type SidebarMenuSubProps = ComponentProps<typeof ark.ul>;

export const SidebarMenuSub = ({
  className,
  ...props
}: SidebarMenuSubProps) => (
  <ark.ul
    data-slot="sidebar-menu-sub"
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
);

export type SidebarMenuSubItemProps = ComponentProps<typeof ark.li>;

export const SidebarMenuSubItem = ({
  className,
  ...props
}: SidebarMenuSubItemProps) => (
  <ark.li
    data-slot="sidebar-menu-sub-item"
    data-sidebar="menu-sub-item"
    className={cn("group/menu-sub-item relative", className)}
    {...props}
  />
);

export type SidebarMenuSubButtonProps = ComponentProps<typeof ark.a> & {
  size?: "sm" | "md";
  isActive?: boolean;
};

export const SidebarMenuSubButton = ({
  size = "md",
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) => (
  <ark.a
    data-slot="sidebar-menu-sub-button"
    data-sidebar="menu-sub-button"
    data-size={size}
    data-active={isActive}
    className={cn(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      size === "sm" && "text-xs",
      size === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  />
);
