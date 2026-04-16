import { Link, useLocation } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const MainNav = ({
  items,
  className,
  linkClassName,
  variant = "default",
  ...props
}: ComponentProps<"nav"> & {
  items: { href: string; label: string }[];
  linkClassName?: string;
  variant?: "default" | "landing";
}) => {
  const location = useLocation();
  const isLanding = variant === "landing";

  return (
    <nav
      className={cn(
        "hidden items-center md:flex",
        isLanding
          ? "gap-1 rounded-full border border-border/60 bg-background/72 p-1 shadow-sm backdrop-blur-xl"
          : "gap-0",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          data-active={location.href === item.href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            isLanding &&
              "rounded-full border border-transparent px-4 text-muted-foreground transition-[color,background-color,border-color,box-shadow] hover:border-border/70 hover:bg-background/88 hover:text-foreground hover:shadow-xs data-[active=true]:border-border/80 data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-xs",
            linkClassName,
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
