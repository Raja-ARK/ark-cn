import { MoonIcon, SunIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Swap } from "@/components/ui/swap";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { SwapIndicator } from "./ui/swap";

const ToggleTheme = ({
  className,
  ...props
}: Omit<
  ComponentProps<typeof Button>,
  "children" | "onClick" | "aria-label"
>) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Show moon" : "Show sun"}
      {...props}
    >
      <Swap swap={theme === "light"}>
        <SwapIndicator className="swap-indicator-rotate" type="on">
          <MoonIcon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-rotate" type="off">
          <SunIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default ToggleTheme;
