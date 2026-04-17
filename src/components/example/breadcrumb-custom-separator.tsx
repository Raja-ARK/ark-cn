import { DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbCustomSeparatorDemo = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#0">Settings</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon className="size-3" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="#0">Team</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon className="size-3" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Members</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbCustomSeparatorDemo;
