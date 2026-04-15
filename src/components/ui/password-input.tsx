"use client";

import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/react/password-input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export type PasswordInputRootProps = PasswordInputPrimitive.RootProps;

export const PasswordInputRoot = ({
  className,
  ...props
}: PasswordInputRootProps) => (
  <PasswordInputPrimitive.Root
    className={cn(
      "group/password-input flex w-full flex-col gap-1.5",
      className,
    )}
    data-slot="password-input"
    {...props}
  />
);

export type PasswordInputLabelProps = PasswordInputPrimitive.LabelProps;

export const PasswordInputLabel = ({
  className,
  ...props
}: PasswordInputLabelProps) => (
  <PasswordInputPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      className,
    )}
    data-slot="password-input-label"
    {...props}
  />
);

export type PasswordInputControlProps = PasswordInputPrimitive.ControlProps;

export const PasswordInputControl = ({
  ...props
}: PasswordInputControlProps) => (
  <PasswordInputPrimitive.Control
    data-slot="password-input-control"
    {...props}
  />
);

export type PasswordInputInputProps = PasswordInputPrimitive.InputProps;

export const PasswordInputInput = ({ ...props }: PasswordInputInputProps) => (
  <PasswordInputPrimitive.Input data-slot="password-input-input" {...props} />
);

export type PasswordInputProps = {
  startAddon?: ReactNode;
  endAddon?: ReactNode;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  hideVisibilityToggle?: boolean;
} & Omit<PasswordInputInputProps, "size">;

export const PasswordInput = ({
  startAddon,
  endAddon,
  variant = "ghost",
  size = "icon-xs",
  hideVisibilityToggle = false,
  ...props
}: PasswordInputProps) => {
  return (
    <PasswordInputControl asChild>
      <InputGroup>
        {startAddon && (
          <InputGroupAddon align="inline-start">{startAddon}</InputGroupAddon>
        )}
        <PasswordInputInput {...props} asChild>
          <InputGroupInput />
        </PasswordInputInput>

        <InputGroupAddon align="inline-end">
          {endAddon && <>{endAddon}</>}
          {!hideVisibilityToggle && (
            <PasswordInputVisibilityTrigger asChild>
              <Button variant={variant} size={size}>
                <PasswordInputIndicator fallback={<EyeOffIcon />}>
                  <EyeIcon />
                </PasswordInputIndicator>
              </Button>
            </PasswordInputVisibilityTrigger>
          )}
        </InputGroupAddon>
      </InputGroup>
    </PasswordInputControl>
  );
};

export type PasswordInputVisibilityTriggerProps =
  PasswordInputPrimitive.VisibilityTriggerProps;

export const PasswordInputVisibilityTrigger = ({
  ...props
}: PasswordInputVisibilityTriggerProps) => (
  <PasswordInputPrimitive.VisibilityTrigger
    data-slot="password-input-visibility-trigger"
    {...props}
  />
);

export type PasswordInputIndicatorProps = PasswordInputPrimitive.IndicatorProps;

export const PasswordInputIndicator = ({
  ...props
}: PasswordInputIndicatorProps) => (
  <PasswordInputPrimitive.Indicator
    data-slot="password-input-indicator"
    {...props}
  />
);

export type PasswordInputRootProviderProps =
  PasswordInputPrimitive.RootProviderProps;

export const PasswordInputRootProvider = (
  props: PasswordInputRootProviderProps,
) => (
  <PasswordInputPrimitive.RootProvider
    data-slot="password-input-root-provider"
    {...props}
  />
);

export type PasswordInputContextProps = PasswordInputPrimitive.ContextProps;

export const PasswordInputContext = (props: PasswordInputContextProps) => (
  <PasswordInputPrimitive.Context {...props} />
);

export type { PasswordInputVisibilityChangeDetails } from "@ark-ui/react/password-input";

export {
  type UsePasswordInputProps,
  type UsePasswordInputReturn,
  usePasswordInput,
  usePasswordInputContext,
} from "@ark-ui/react/password-input";
