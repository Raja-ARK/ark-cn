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
          <a
            href="https://github.com/RajaARK99/ark-cn"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
            aria-label="Open ark-cn GitHub repository"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.254-.447-1.277.098-2.662 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.297 2.747-1.027 2.747-1.027.546 1.385.202 2.408.1 2.662.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
