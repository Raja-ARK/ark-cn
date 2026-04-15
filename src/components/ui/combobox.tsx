"use client";

import {
  type CollectionItem,
  type ComboboxInputValueChangeDetails,
  Combobox as ComboboxPrimitive,
  type ListCollection,
  type UseComboboxContext,
  useComboboxContext,
  useListCollection,
} from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import {
  type ComponentProps,
  Fragment,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

/** Default item shape when you omit an explicit generic on list helpers. */
export type DefaultComboboxItem = { label: string; value: string };

/**
 * Narrows `collection` from context. Prefer passing `collection` from
 * `Combobox`’s `renderChildren` so `T` is inferred from `ListCollection<T>`.
 */
export const useComboboxListCollection = <
  T extends CollectionItem = CollectionItem,
>() => {
  const { collection } = useComboboxContext();
  return collection as ListCollection<T>;
};

export type ComboboxProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxPrimitive.RootProps<T>,
  "collection" | "children"
> & { children: ReactNode | ((api: UseComboboxContext<T>) => ReactNode) } & (
    | {
        items: readonly T[];
        groupBy?: (item: T, index: number) => string;
        groupSort?:
          | string[]
          | "asc"
          | "desc"
          | ((a: string, b: string) => number);
        limit?: number;
        itemToString?: (item: T) => string;
        itemToValue?: (item: T) => string;
        isItemDisabled?: (item: T) => boolean;

        filterType?: "contains" | "endsWith" | "startsWith";
      }
    | { collection: ListCollection<T> }
  );

export const Combobox = <T extends CollectionItem = CollectionItem>({
  onInputValueChange,
  positioning,
  children,
  ...props
}: ComboboxProps<T>) => {
  const items = useMemo(() => {
    return "items" in props ? props.items : [];
  }, [props]);

  const groupBy = useMemo(() => {
    return "groupBy" in props ? props.groupBy : undefined;
  }, [props]);

  const groupSort = useMemo(() => {
    return "groupSort" in props ? props.groupSort : undefined;
  }, [props]);

  const limit = useMemo(() => {
    return "limit" in props ? props.limit : undefined;
  }, [props]);

  const itemToString = useMemo(() => {
    return "itemToString" in props ? props.itemToString : undefined;
  }, [props]);

  const itemToValue = useMemo(() => {
    return "itemToValue" in props ? props.itemToValue : undefined;
  }, [props]);

  const isItemDisabled = useMemo(() => {
    return "isItemDisabled" in props ? props.isItemDisabled : undefined;
  }, [props]);

  const filterType = useMemo(() => {
    return "filterType" in props ? props.filterType : "contains";
  }, [props]);
  const collection = useMemo(() => {
    return "collection" in props ? props.collection : undefined;
  }, [props]);

  const { contains, endsWith, startsWith } = useFilter({ sensitivity: "base" });

  const {
    collection: defaultCollection,
    filter,
    set,
  } = useListCollection<T>({
    initialItems: items,
    filter:
      filterType === "contains"
        ? contains
        : filterType === "endsWith"
          ? endsWith
          : startsWith,
    groupBy,
    groupSort,
    limit,
    itemToString,
    itemToValue,
    isItemDisabled,
  });

  const itemsKey = useMemo(
    () =>
      items
        .map((item) =>
          String(
            itemToValue?.(item) ?? (item as { value?: string }).value ?? "",
          ),
        )
        .join("\uffff"),
    [items, itemToValue],
  );

  useEffect(() => {
    set([...items]);
  }, [itemsKey]);

  const handleInputValueChange = useCallback(
    (details: ComboboxInputValueChangeDetails) => {
      filter(details.inputValue);
      onInputValueChange?.(details);
    },
    [filter, onInputValueChange],
  );

  return (
    <ComboboxPrimitive.Root
      collection={collection ?? defaultCollection}
      onInputValueChange={
        collection ? onInputValueChange : handleInputValueChange
      }
      positioning={
        positioning ?? { placement: "bottom-start", sameWidth: true }
      }
      {...props}
    >
      <ComboboxPrimitive.Context>
        {(api) => {
          return typeof children === "function"
            ? // Render-prop `api` is typed wider than our generic `T`; safe at runtime when `items`/`collection` match `T`.
              children(api as UseComboboxContext<T>)
            : children;
        }}
      </ComboboxPrimitive.Context>
    </ComboboxPrimitive.Root>
  );
};

export const ComboboxControl = ({
  ...props
}: ComboboxPrimitive.ControlProps) => {
  return <ComboboxPrimitive.Control data-slot="combobox-control" {...props} />;
};

export type ComboboxInputProps = Omit<
  ComboboxPrimitive.InputProps,
  "size" | "asChild"
> & {
  size?: "default" | "lg" | "sm";
  startAddon?: ReactNode;
  endAddon?: ReactNode;
  showClear?: boolean;
  showIndicator?: boolean;
};

export const ComboboxInput = ({
  startAddon,
  endAddon,
  showClear = true,
  showIndicator = true,
  size = "default",
  ...props
}: ComboboxInputProps) => {
  return (
    <ComboboxPrimitive.Control asChild {...props}>
      <InputGroup>
        {startAddon && (
          <InputGroupAddon align={"inline-start"}>{startAddon}</InputGroupAddon>
        )}
        <ComboboxPrimitive.Input data-slot="combobox-input" {...props} asChild>
          <InputGroupInput size={size} />
        </ComboboxPrimitive.Input>

        {(endAddon || showClear || showIndicator) && (
          <InputGroupAddon align={"inline-end"}>
            {endAddon}
            {showClear && (
              <ComboboxClearTrigger asChild>
                <Button variant="ghost" size={"icon-sm"}>
                  <XIcon />
                </Button>
              </ComboboxClearTrigger>
            )}
            {showIndicator && (
              <ComboboxTrigger asChild>
                <Button variant="ghost" size={"icon-sm"}>
                  <ChevronsUpDownIcon />
                </Button>
              </ComboboxTrigger>
            )}
          </InputGroupAddon>
        )}
      </InputGroup>
    </ComboboxPrimitive.Control>
  );
};

export const ComboboxPopup = ({
  className,
  disablePortal,
  ...props
}: ComboboxPrimitive.ContentProps & { disablePortal?: boolean }) => {
  const inner = (
    <ComboboxPrimitive.Content
      className={cn(
        "flex max-h-[min(var(--available-height,20rem),20rem)] flex-col overflow-y-auto overscroll-contain rounded-lg border border-border bg-popover p-0.5 text-popover-foreground shadow-md focus-visible:outline-none",
        !disablePortal && "z-50",
        className,
      )}
      data-slot="combobox-content"
      {...props}
    />
  );
  return disablePortal ? (
    inner
  ) : (
    <Portal>
      <ComboboxPrimitive.Positioner>{inner} </ComboboxPrimitive.Positioner>
    </Portal>
  );
};

export type ComboboxListProps<T extends CollectionItem = CollectionItem> = {
  className?: string;
  items: readonly T[];
  children: (item: T) => ReactNode;
};

export const ComboboxList = <T extends CollectionItem = CollectionItem>({
  items,
  className,
  children,
}: ComboboxListProps<T>) => {
  const { collection } = useComboboxContext();

  return (
    <ComboboxPrimitive.List
      className={cn("flex flex-col gap-0.5 p-0.5", className)}
      data-slot="combobox-list"
    >
      {collection.items.map((item: (typeof items)[number]) => {
        const key = collection.getItemValue(item) ?? "";
        return <Fragment key={key}>{children(item)}</Fragment>;
      })}
    </ComboboxPrimitive.List>
  );
};

export type ComboboxGroupedListProps<
  T extends CollectionItem = CollectionItem,
> = {
  className?: string;
  items: readonly T[];
  children: (group: readonly [string, T[]]) => ReactNode;
};

export const ComboboxGroupedList = <T extends CollectionItem = CollectionItem>({
  items,
  className,
  children,
}: ComboboxGroupedListProps<T>) => {
  const { collection } = useComboboxContext();
  const groups = collection.group();
  return (
    <div
      className={cn("flex flex-col gap-1 p-0.5", className)}
      data-slot="combobox-grouped-list"
    >
      {groups.map((tuple: readonly [string, (typeof items)[number][]]) => (
        <Fragment key={tuple[0]}>{children(tuple)}</Fragment>
      ))}
    </div>
  );
};

export const ComboboxEmpty = ({
  className,
  ...props
}: ComboboxPrimitive.EmptyProps) => (
  <ComboboxPrimitive.Empty
    className={cn(
      "rounded-md px-2 py-3 text-center text-muted-foreground text-sm",
      className,
    )}
    data-slot="combobox-empty"
    {...props}
  />
);

export const ComboboxItem = ({
  className,
  ...props
}: ComboboxPrimitive.ItemProps) => (
  <ComboboxPrimitive.Item
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      className,
    )}
    data-slot="combobox-item"
    {...props}
  />
);

export const ComboboxItemText = ({
  className,
  ...props
}: ComboboxPrimitive.ItemTextProps) => (
  <ComboboxPrimitive.ItemText
    className={cn("min-w-0 flex-1 truncate", className)}
    data-slot="combobox-item-text"
    {...props}
  />
);

export const ComboboxItemIndicator = ({
  className,
  children,
  ...props
}: ComboboxPrimitive.ItemIndicatorProps) => (
  <ComboboxPrimitive.ItemIndicator
    className={cn("text-primary", className)}
    data-slot="combobox-item-indicator"
    {...props}
  >
    {children ?? <CheckIcon className="size-4" />}
  </ComboboxPrimitive.ItemIndicator>
);

export const ComboboxItemGroup = ({
  className,
  ...props
}: ComboboxPrimitive.ItemGroupProps) => (
  <ComboboxPrimitive.ItemGroup
    className={cn("flex flex-col gap-0.5", className)}
    data-slot="combobox-item-group"
    {...props}
  />
);

export const ComboboxItemGroupLabel = ({
  className,
  ...props
}: ComboboxPrimitive.ItemGroupLabelProps) => (
  <ComboboxPrimitive.ItemGroupLabel
    className={cn(
      "px-2 py-1 font-medium text-muted-foreground text-xs uppercase tracking-wide",
      className,
    )}
    data-slot="combobox-item-group-label"
    {...props}
  />
);

export const ComboboxSeparator = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    role="separator"
    className={cn("-mx-0.5 my-1 h-px bg-border", className)}
    data-slot="combobox-separator"
    {...props}
  />
);

export const ComboboxLabel = ({
  className,
  ...props
}: ComboboxPrimitive.LabelProps) => (
  <ComboboxPrimitive.Label
    className={cn(
      "mb-1 block font-medium text-foreground text-sm select-none data-disabled:opacity-50",
      className,
    )}
    data-slot="combobox-label"
    {...props}
  />
);

export const ComboboxTrigger = ({
  ...props
}: ComboboxPrimitive.TriggerProps) => (
  <ComboboxPrimitive.Trigger data-slot="combobox-trigger-raw" {...props} />
);

export const ComboboxClearTrigger = ({
  ...props
}: ComboboxPrimitive.ClearTriggerProps) => (
  <ComboboxPrimitive.ClearTrigger
    data-slot="combobox-clear-trigger-raw"
    {...props}
  />
);

export const ComboboxValue = ({
  children,
  placeholder,
  className,
}: {
  children?: (api: ComboboxPrimitive.ContextProps<CollectionItem>) => ReactNode;
  placeholder?: string;
  className?: string;
}) => (
  <ComboboxPrimitive.Context>
    {(api) => {
      if (children) {
        return (
          <>
            {/* `Context` callback api vs `ContextProps` differ in Ark's types; double assertion is intentional. */}
            {children(
              api as unknown as ComboboxPrimitive.ContextProps<CollectionItem>,
            )}
          </>
        );
      }
      const text = api.valueAsString?.trim()
        ? api.valueAsString
        : api.collection.stringifyItems(api.selectedItems, ", ");
      return (
        <span
          className={cn(
            "truncate",
            !text && "text-muted-foreground",
            className,
          )}
          data-slot="combobox-value"
        >
          {text || placeholder}
        </span>
      );
    }}
  </ComboboxPrimitive.Context>
);

export const ComboboxChips = ({
  className,
  startAddon,
  endAddon,
  children,
  ...props
}: ComboboxPrimitive.ControlProps & {
  className?: string;
  startAddon?: ReactNode;
  children?: ReactNode;
  endAddon?: ReactNode;
}) => {
  return (
    <ComboboxPrimitive.Control
      className={cn(
        "relative inline-flex min-h-9 w-full flex-wrap gap-1 rounded-lg border border-input bg-background not-dark:bg-clip-padding p-[calc(--spacing(1)-1px)] text-base shadow-xs/5 outline-none ring-ring/24 transition-shadow *:min-h-7 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-focus-within:not-data-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] has-disabled:pointer-events-none has-data-[size=lg]:min-h-10 has-data-[size=sm]:min-h-8 has-data-invalid:border-destructive/36 has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-within,[data-invalid]]:shadow-none focus-within:has-data-invalid:border-destructive/64 focus-within:has-data-invalid:ring-destructive/16 has-data-[size=lg]:*:min-h-8 has-data-[size=sm]:*:min-h-6 sm:min-h-8 sm:text-sm sm:has-data-[size=lg]:min-h-9 sm:has-data-[size=sm]:min-h-7 sm:*:min-h-6 sm:has-data-[size=lg]:*:min-h-7 sm:has-data-[size=sm]:*:min-h-5 dark:not-has-disabled:bg-input/32 dark:has-autofill:bg-foreground/8 dark:has-data-invalid:ring-destructive/24 dark:not-has-disabled:not-focus-within:not-data-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]",
        className,
      )}
      data-slot="combobox-chips"
      {...props}
    >
      {startAddon && (
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center ps-2 opacity-80 has-[~[data-size=sm]]:has-[+[data-slot=combobox-chip]]:pe-1.5 has-[~[data-size=sm]]:ps-1.5 has-[+[data-slot=combobox-chip]]:pe-2"
          data-slot="combobox-start-addon"
        >
          {startAddon}
        </div>
      )}
      {children}
      {endAddon && (
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center pe-2 opacity-80 has-[~[data-size=sm]]:has-[+[data-slot=combobox-chip]]:ps-1.5 has-[~[data-size=sm]]:pe-1.5 has-[+[data-slot=combobox-chip]]:ps-2"
          data-slot="combobox-end-addon"
        >
          {endAddon}
        </div>
      )}
    </ComboboxPrimitive.Control>
  );
};

export type ComboboxChipsInputProps = Omit<
  ComponentProps<typeof ComboboxPrimitive.Input>,
  "size"
>;

export const ComboboxChipsInput = ({
  className,
  ...props
}: ComboboxChipsInputProps) => (
  <ComboboxPrimitive.Input
    className={cn(
      "min-w-18 flex-1 border-0 bg-transparent py-0.5 outline-none placeholder:text-muted-foreground/72",
      className,
    )}
    data-slot="combobox-chips-input"
    {...props}
  />
);

export const ComboboxChip = ({
  className,
  value,
  children,
  removeProps,
  "aria-label": ariaLabel,
}: {
  className?: string;
  value: string;
  children: ReactNode;
  removeProps?: ComponentProps<"button">;
  "aria-label"?: string;
}) => {
  const { clearValue, disabled } = useComboboxContext();
  return (
    <span
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-6 max-w-full items-center gap-1 rounded-md border border-border bg-muted/50 px-1.5 text-xs",
        className,
      )}
      data-slot="combobox-chip"
    >
      <span className="truncate">{children}</span>
      {!disabled && (
        <button
          type="button"
          className="cursor-pointer inline-flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-background hover:text-foreground p-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:outline-none"
          onClick={() => {
            clearValue(value);
          }}
          {...removeProps}
        >
          <XIcon className="size-3" />
        </button>
      )}
    </span>
  );
};

export const ComboboxProvider = <T extends CollectionItem = CollectionItem>({
  ...props
}: ComboboxPrimitive.RootProviderProps<T>) => {
  return <ComboboxPrimitive.RootProvider {...props} />;
};

export const ComboboxContext = ComboboxPrimitive.Context;
