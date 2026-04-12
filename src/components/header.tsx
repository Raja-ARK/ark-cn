import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import ToggleTheme from "./toggle-theme";

const Header = ({
  className,
  containerClassName,
  mobileMenu = null,
}: {
  className?: string;
  containerClassName?: string;
  mobileMenu?: React.ReactNode;
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 bg-background/5 z-10 backdrop-blur-md h-(--header-height)",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-400  mx-auto md:px-4 p-4 flex items-center justify-between",
          containerClassName,
        )}
      >
        <div className="flex items-center">
          <Link
            to="/"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="size-full text-foreground"
            >
              <line
                className="arc-mark"
                x1="94"
                y1="178"
                x2="128"
                y2="82"
                strokeWidth="15"
                strokeLinecap="round"
                stroke="currentColor"
              />
              <line
                className="arc-mark"
                x1="162"
                y1="178"
                x2="128"
                y2="82"
                strokeWidth="15"
                strokeLinecap="round"
                stroke="currentColor"
              />
              <path
                className="arc-mark"
                d="M 104 143 Q 128 118 152 143"
                fill="none"
                strokeWidth="13"
                strokeLinecap="round"
                stroke="currentColor"
              />
            </svg>
          </Link>
          {mobileMenu}
          <MainNav items={siteConfig.navItems} />
        </div>
        <div className="flex items-center gap-2">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
