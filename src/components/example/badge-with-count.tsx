import { InfoIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BadgeWithCountDemo = () => (
  <Badge variant="info">
    <InfoIcon />
    Notifications
    <span className="rounded bg-background/70 px-1 text-[0.65rem]">12</span>
  </Badge>
);

export default BadgeWithCountDemo;
