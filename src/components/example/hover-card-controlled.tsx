import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardPopup,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HOVER_PROFILE = {
  avatar: "https://i.pravatar.cc/300?u=sarah",
  bio: "Design Engineer at Acme Inc. Building beautiful interfaces and design systems.",
  name: "Sarah Chen",
  username: "@sarah_chen",
} as const;

const HoverCardControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Button
        size="sm"
        type="button"
        variant="outline"
        onClick={() => setOpen((o) => !o)}
      >
        Toggle
      </Button>
      <HoverCard onOpenChange={(e) => setOpen(e.open)} open={open}>
        <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
          Liked by{" "}
          <HoverCardTrigger asChild>
            <a
              className="font-medium text-primary underline underline-offset-2"
              href="#hover-controlled"
            >
              {HOVER_PROFILE.username}
            </a>
          </HoverCardTrigger>{" "}
          and 3 others.
        </p>
        <HoverCardPopup>
          <div className="flex flex-col gap-3">
            <img
              alt=""
              className="size-16 rounded-full object-cover"
              src={HOVER_PROFILE.avatar}
            />
            <div>
              <p className="font-semibold text-foreground text-sm">
                {HOVER_PROFILE.name}
              </p>
              <p className="text-muted-foreground text-sm">
                {HOVER_PROFILE.username}
              </p>
            </div>
            <p className="text-foreground text-sm">{HOVER_PROFILE.bio}</p>
          </div>
        </HoverCardPopup>
      </HoverCard>
    </div>
  );
};

export default HoverCardControlledDemo;
