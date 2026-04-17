"use client";

import {
  Presence as PresencePrimitive,
  type PresenceProps as PresencePrimitiveProps,
  PresenceProvider,
  splitPresenceProps,
  usePresence,
  usePresenceContext,
} from "@ark-ui/react/presence";
import { cn } from "@/lib/utils";

export type PresenceProps = PresencePrimitiveProps;

export const Presence = ({ className, ...props }: PresenceProps) => (
  <PresencePrimitive
    className={cn(className)}
    data-slot="presence"
    {...props}
  />
);

export type {
  PresenceBaseProps,
  UsePresenceContext,
  UsePresenceProps,
  UsePresenceReturn,
} from "@ark-ui/react/presence";
export {
  PresenceProvider,
  splitPresenceProps,
  usePresence,
  usePresenceContext,
};
