import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

const MobileMenu = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={toggleSidebar}
    >
      <MenuIcon />
    </Button>
  );
};

export default MobileMenu;
