import { DownloadIcon } from "lucide-react";
import { DownloadTrigger } from "@/components/ui/download-trigger";

const payload = JSON.stringify(
  {
    generatedAt: "2026-04-16T12:00:00.000Z",
    kind: "ark-cn-demo",
    utilities: ["download-trigger", "locale", "presence"],
  },
  null,
  2,
);

const DownloadTriggerDemo = () => (
  <DownloadTrigger
    data={() => new Blob([payload], { type: "application/json" })}
    fileName="ark-cn-demo.json"
    mimeType="application/json"
    variant="outline"
  >
    <DownloadIcon className="size-4" />
    Download JSON
  </DownloadTrigger>
);

export default DownloadTriggerDemo;
