import { LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BadgeWithLinkDemo = () => (
  <a href="#0" className="inline-flex">
    <Badge variant="outline">
      <LinkIcon />
      With Link
    </Badge>
  </a>
);

export default BadgeWithLinkDemo;
