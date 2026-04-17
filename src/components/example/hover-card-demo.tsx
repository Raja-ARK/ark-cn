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

const HoverCardProfilePreview = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-start justify-between gap-3">
      <img
        alt=""
        className="size-14 shrink-0 rounded-full object-cover"
        src={HOVER_PROFILE.avatar}
      />
      <Button size="sm" type="button" variant="secondary">
        Follow
      </Button>
    </div>
    <div>
      <p className="font-semibold text-foreground text-sm leading-tight">
        {HOVER_PROFILE.name}
      </p>
      <p className="text-muted-foreground text-sm">{HOVER_PROFILE.username}</p>
    </div>
    <p className="text-foreground text-sm leading-snug">{HOVER_PROFILE.bio}</p>
    <div className="flex gap-4 text-muted-foreground text-xs">
      <div className="flex gap-1">
        <span aria-hidden className="font-medium text-foreground">
          2,456
        </span>
        <span>Following</span>
      </div>
      <div className="flex gap-1">
        <span aria-hidden className="font-medium text-foreground">
          14.5K
        </span>
        <span>Followers</span>
      </div>
    </div>
  </div>
);

const HoverCardBasicDemo = () => (
  <HoverCard>
    <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
      Liked by{" "}
      <HoverCardTrigger asChild>
        <a
          className="font-medium text-primary underline underline-offset-2"
          href="#hover-basic"
        >
          {HOVER_PROFILE.username}
        </a>
      </HoverCardTrigger>{" "}
      and 3 others.
    </p>
    <HoverCardPopup>
      <HoverCardProfilePreview />
    </HoverCardPopup>
  </HoverCard>
);

export default HoverCardBasicDemo;
