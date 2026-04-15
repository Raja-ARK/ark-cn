"use client";

import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ZoomImage } from "@/components/ui/zoom-image";

const IMAGE_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ZoomImageButtonZoomDemo = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          aria-label="Zoom out"
          variant="outline"
          size="icon-sm"
          onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
        >
          <ZoomOutIcon aria-hidden className="size-4" />
        </Button>
        <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
          {zoom.toFixed(2)}×
        </span>
        <Button
          aria-label="Zoom in"
          variant="outline"
          size="icon-sm"
          onClick={() => setZoom((z) => Math.min(5, z + 0.25))}
        >
          <ZoomInIcon aria-hidden className="size-4" />
        </Button>
      </div>
      <ZoomImage
        alt="Mountain"
        className="max-w-md"
        maxZoom={5}
        minZoom={1}
        zoom={zoom}
        onZoomChange={(e) => setZoom(e.zoom)}
        src={IMAGE_SAMPLE}
      />
    </div>
  );
};

export default ZoomImageButtonZoomDemo;
