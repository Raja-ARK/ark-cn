"use client";

import type { CollectionItem } from "@ark-ui/react/combobox";
import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { SearchIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxGroupedList,
  ComboboxInput,
  type ComboboxInputProps,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemText,
  ComboboxList,
  type ComboboxListProps,
  ComboboxPopup,
  type ComboboxProps,
  ComboboxSeparator,
} from "@/components/ui/combobox";

/**
 * In-flow list: default Floating UI positioning takes the popup out of document
 * flow, so a sibling footer in a flex column can sit on top and steal pointer
 * events. This keeps the list in normal flow (dialog + standalone panel).
 */
const commandInlinePositioning: ComboboxProps["positioning"] = {
  gutter: 0,
  listeners: false,
  placement: "bottom-start",
  sameWidth: true,
  updatePosition: async ({ floatingElement }) => {
    if (!floatingElement) return;
    const el = floatingElement;
    el.style.setProperty("position", "relative");
    el.style.setProperty("transform", "none");
    el.style.setProperty("top", "auto");
    el.style.setProperty("left", "auto");
    el.style.setProperty("right", "auto");
    el.style.setProperty("bottom", "auto");
    el.style.setProperty("width", "100%");
    el.style.setProperty("min-width", "0");
  },
};

export const CommandDialog = (props: Dialog.RootProps) => (
  <Dialog.Root {...props} />
);

export const CommandDialogTrigger = ({
  className,
  ...props
}: Dialog.TriggerProps) => (
  <Dialog.Trigger className={cn(className)} {...props} />
);

export const CommandDialogPortal = ({
  ...props
}: ComponentProps<typeof Portal>) => <Portal {...props} />;

export const CommandDialogBackdrop = ({
  className,
  ...props
}: Dialog.BackdropProps) => (
  <Dialog.Backdrop
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-200 dark:bg-black/50 dark:backdrop-blur-md data-[state=closed]:opacity-0 data-[state=open]:opacity-100 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:dark:bg-black/35",
      className,
    )}
    {...props}
  />
);

export type CommandDialogPopupProps = Dialog.ContentProps & {
  backdropClassName?: string;
  positionerClassName?: string;
};

export const CommandDialogPopup = ({
  backdropClassName,
  children,
  className,
  positionerClassName,
  ...contentProps
}: CommandDialogPopupProps) => (
  <Portal>
    <CommandDialogBackdrop className={backdropClassName} />
    <Dialog.Positioner
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-center overscroll-y-none p-4 pt-[min(15vh,8rem)] sm:pt-24",
        positionerClassName,
      )}
    >
      <Dialog.Content
        className={cn(
          "relative z-50 flex max-h-[min(calc(100dvh-2rem),32rem)] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none transition-[opacity,transform] duration-150 data-[state=closed]:scale-[0.98] data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100",
          className,
        )}
        {...contentProps}
      >
        {children}
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
);

export const Command = <T extends CollectionItem = CollectionItem>({
  autoFocus = true,
  className,
  closeOnSelect = false,
  disableLayer = true,
  inputBehavior = "autohighlight",
  positioning,
  selectionBehavior = "clear",
  ...props
}: ComboboxProps<T>) => (
  <Combobox
    autoFocus={autoFocus}
    className={cn("flex min-h-0 flex-1 flex-col", className)}
    closeOnSelect={closeOnSelect}
    disableLayer={disableLayer}
    inputBehavior={inputBehavior}
    positioning={positioning ?? commandInlinePositioning}
    selectionBehavior={selectionBehavior}
    {...props}
  />
);

export const CommandInput = ({
  className,
  showClear = false,
  showIndicator = false,
  size = "lg",
  startAddon = (
    <SearchIcon
      aria-hidden
      className="size-4 text-muted-foreground opacity-80"
    />
  ),
  ...props
}: ComboboxInputProps) => (
  <ComboboxInput
    className={cn(
      "rounded-none border-0 border-border border-b shadow-none has-focus-within:border-border has-focus-within:ring-0 has-focus-within:ring-offset-0",
      className,
    )}
    showClear={showClear}
    showIndicator={showIndicator}
    size={size}
    startAddon={startAddon}
    {...props}
  />
);

export const CommandPopup = ({
  className,
  ...props
}: ComponentProps<typeof ComboboxPopup>) => (
  <ComboboxPopup
    disablePortal
    className={cn(
      "max-h-none min-h-0 w-full flex-1 rounded-none border-0 bg-transparent p-0 shadow-none",
      className,
    )}
    {...props}
  />
);

export const CommandList = <T extends CollectionItem = CollectionItem>({
  className,
  ...props
}: ComboboxListProps<T>) => (
  <ComboboxList
    className={cn(
      "max-h-[min(280px,var(--available-height,50vh))] gap-0 overflow-y-auto overscroll-contain p-1 outline-none",
      className,
    )}
    {...props}
  />
);

export const CommandGroupedList = ComboboxGroupedList;

export const CommandEmpty = ({
  className,
  ...props
}: ComponentProps<typeof ComboboxEmpty>) => (
  <ComboboxEmpty
    className={cn("rounded-none py-6 text-sm", className)}
    {...props}
  />
);

export const CommandGroup = ComboboxItemGroup;

export const CommandGroupLabel = ({
  className,
  ...props
}: ComponentProps<typeof ComboboxItemGroupLabel>) => (
  <ComboboxItemGroupLabel
    className={cn(
      "px-2 py-1.5 text-[0.6875rem] uppercase tracking-wide",
      className,
    )}
    {...props}
  />
);

export const CommandItem = ({
  className,
  ...props
}: ComponentProps<typeof ComboboxItem>) => (
  <ComboboxItem
    className={cn(
      "rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  />
);

export const CommandItemText = ComboboxItemText;

export const CommandSeparator = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <ComboboxSeparator className={cn("my-2", className)} {...props} />
);

export const CommandShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto shrink-0 text-muted-foreground text-xs tracking-wide tabular-nums",
      className,
    )}
    data-slot="command-shortcut"
    {...props}
  />
);

export const CommandFooter = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-wrap items-center justify-between gap-3 border-border border-t bg-muted/30 px-3 py-2 text-muted-foreground text-xs",
      className,
    )}
    data-slot="command-footer"
    {...props}
  />
);

export const CommandPanel = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex max-h-[min(24rem,70vh)] flex-col overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-md",
      className,
    )}
    data-slot="command-panel"
    {...props}
  />
);

export {
  useDialog as useCommandDialog,
  useDialogContext as useCommandDialogContext,
} from "@ark-ui/react/dialog";
