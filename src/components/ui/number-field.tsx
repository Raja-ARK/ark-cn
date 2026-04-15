"use client";

import { NumberInput as NumberFieldPrimitive } from "@ark-ui/react/number-input";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export type NumberFieldRootProps = NumberFieldPrimitive.RootProps;

export const NumberFieldRoot = ({ ...props }: NumberFieldRootProps) => (
  <NumberFieldPrimitive.Root data-slot="number-field" {...props} />
);

export type NumberFieldLabelProps = NumberFieldPrimitive.LabelProps;

export const NumberFieldLabel = ({
  className,
  ...props
}: NumberFieldLabelProps) => (
  <NumberFieldPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      className,
    )}
    data-slot="number-field-label"
    {...props}
  />
);

export type NumberFieldIncrementTriggerProps =
  NumberFieldPrimitive.IncrementTriggerProps;

export const NumberFieldIncrementTrigger = ({
  ...props
}: NumberFieldIncrementTriggerProps) => (
  <NumberFieldPrimitive.IncrementTrigger
    data-slot="number-field-increment-trigger"
    {...props}
  />
);

export type NumberFieldDecrementTriggerProps =
  NumberFieldPrimitive.DecrementTriggerProps;

export const NumberFieldDecrementTrigger = ({
  ...props
}: NumberFieldDecrementTriggerProps) => (
  <NumberFieldPrimitive.DecrementTrigger
    data-slot="number-field-decrement-trigger"
    {...props}
  />
);
export type NumberFieldControlProps = NumberFieldPrimitive.ControlProps;

export const NumberFieldControl = ({ ...props }: NumberFieldControlProps) => (
  <NumberFieldPrimitive.Control data-slot="number-field-control" {...props} />
);

export type NumberFieldInputProps = {
  className?: string;
  inputClassName?: string;
  inputProps?: ComponentProps<typeof NumberFieldPrimitive.Input>;
  controlProps?: ComponentProps<typeof NumberFieldPrimitive.Control>;
  size?: number | "sm" | "lg" | "default";
  withoutControl?: boolean;
  showTrigger?: boolean;
  triggerVariant?: "between" | "end";
  startAddon?: ReactNode;
  endAddon?: ReactNode;
};

export const NumberFieldInput = ({
  className,
  inputClassName,
  inputProps,
  controlProps,
  size = "default",
  withoutControl = false,
  showTrigger = true,
  triggerVariant = "end",
  startAddon,
  endAddon,
}: NumberFieldInputProps) => {
  const NumberInputGroup = () => {
    return (
      <InputGroup className={className}>
        {((showTrigger && triggerVariant === "between") || startAddon) && (
          <InputGroupAddon align="inline-start">
            {showTrigger && triggerVariant === "between" && (
              <NumberFieldDecrementTrigger asChild>
                <Button size="icon-xs" type="button" variant="ghost">
                  <MinusIcon aria-hidden />
                </Button>
              </NumberFieldDecrementTrigger>
            )}
            {startAddon}
          </InputGroupAddon>
        )}
        <NumberFieldPrimitive.Input asChild {...inputProps}>
          <InputGroupInput size={size} className={inputClassName} />
        </NumberFieldPrimitive.Input>
        {(showTrigger || endAddon) && (
          <InputGroupAddon
            align="inline-end"
            className={cn(
              showTrigger &&
                triggerVariant === "end" &&
                "flex-col gap-0 border-border border-s p-0 [[data-size=sm]+&]:pe-0!",
            )}
          >
            {endAddon}
            {showTrigger && triggerVariant === "end" && (
              <div className="flex flex-col divide-y divide-border">
                <NumberFieldIncrementTrigger asChild>
                  <Button
                    className="size-4 w-6! shrink-0 rounded-none sm:size-4"
                    size="icon-xs"
                    type="button"
                    variant="ghost"
                  >
                    <ChevronUpIcon aria-hidden />
                  </Button>
                </NumberFieldIncrementTrigger>
                <NumberFieldDecrementTrigger asChild>
                  <Button
                    className="size-4 w-6! shrink-0 rounded-none sm:size-4"
                    size="icon-xs"
                    type="button"
                    variant="ghost"
                  >
                    <ChevronDownIcon aria-hidden />
                  </Button>
                </NumberFieldDecrementTrigger>
              </div>
            )}
            {showTrigger && triggerVariant === "between" && (
              <NumberFieldIncrementTrigger asChild>
                <Button size="icon-xs" type="button" variant="ghost">
                  <PlusIcon aria-hidden />
                </Button>
              </NumberFieldIncrementTrigger>
            )}
          </InputGroupAddon>
        )}
      </InputGroup>
    );
  };

  if (withoutControl) return <NumberInputGroup />;

  return (
    <NumberFieldPrimitive.Control asChild {...controlProps}>
      <NumberInputGroup />
    </NumberFieldPrimitive.Control>
  );
};

export type NumberFieldScrubberProps = NumberFieldPrimitive.ScrubberProps;

export const NumberFieldScrubber = ({ ...props }: NumberFieldScrubberProps) => (
  <NumberFieldPrimitive.Scrubber data-slot="number-field-scrubber" {...props} />
);

export type NumberFieldValueTextProps = NumberFieldPrimitive.ValueTextProps;

export const NumberFieldValueText = ({
  className,
  ...props
}: NumberFieldValueTextProps) => (
  <NumberFieldPrimitive.ValueText
    className={cn(
      "font-variant-numeric text-foreground tabular-nums",
      className,
    )}
    data-slot="number-field-value-text"
    {...props}
  />
);

export type NumberFieldContextProps = NumberFieldPrimitive.ContextProps;

export const NumberFieldContext = (props: NumberFieldContextProps) => (
  <NumberFieldPrimitive.Context {...props} />
);

export type NumberFieldRootProviderProps =
  NumberFieldPrimitive.RootProviderProps;

export const NumberFieldRootProvider = (
  props: NumberFieldRootProviderProps,
) => (
  <NumberFieldPrimitive.RootProvider
    data-slot="number-field-root-provider"
    {...props}
  />
);

export {
  useNumberInput,
  useNumberInputContext,
} from "@ark-ui/react/number-input";
