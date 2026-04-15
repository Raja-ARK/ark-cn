"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  type CollectionItem,
  createListCollection,
  type ListCollection,
  Select as SelectPrimitive,
  type SelectRootProps,
  SelectRootProvider,
  type UseSelectContext,
  type UseSelectReturn,
  useListCollection,
  useSelect,
  useSelectContext,
} from "@ark-ui/react/select";
import type { VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import {
  type ComponentProps,
  Fragment,
  type ReactNode,
  useEffect,
  useMemo,
} from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export type {
  CollectionItem,
  ListCollection,
  UseSelectContext,
  UseSelectReturn,
};
export {
  createListCollection,
  SelectRootProvider,
  useListCollection,
  useSelect,
  useSelectContext,
};

export type SelectProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootProps<T>,
  "collection" | "children"
> & {
  children: ReactNode | ((api: UseSelectContext<T>) => ReactNode);
} & (
    | {
        items: readonly T[];
        groupBy?: (item: T, index: number) => string;
        groupSort?:
          | string[]
          | "asc"
          | "desc"
          | ((a: string, b: string) => number);
        itemToString?: (item: T) => string;
        itemToValue?: (item: T) => string;
        isItemDisabled?: (item: T) => boolean;
      }
    | { collection: ListCollection<T> }
  );

export const Select = <T extends CollectionItem = CollectionItem>({
  positioning,
  children,
  ...props
}: SelectProps<T>) => {
  const items = "items" in props ? props.items : [];
  const groupBy = "items" in props ? props.groupBy : undefined;
  const groupSort = "items" in props ? props.groupSort : undefined;
  const itemToString = "items" in props ? props.itemToString : undefined;
  const itemToValue = "items" in props ? props.itemToValue : undefined;
  const isItemDisabled = "items" in props ? props.isItemDisabled : undefined;
  const collectionProp = "collection" in props ? props.collection : undefined;

  const { collection: defaultCollection, set } = useListCollection<T>({
    initialItems: items,
    groupBy,
    groupSort,
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
    // Sync `items` into the internal collection only when the *contents* change.
    // Avoids infinite render loops when callers pass `items={[...arr]}`.
    set([...items]);
  }, [itemsKey]);

  return (
    <SelectPrimitive.Root
      collection={collectionProp ?? defaultCollection}
      data-slot="select-root"
      positioning={
        positioning ?? { placement: "bottom-start", sameWidth: true }
      }
      {...props}
    >
      {typeof children === "function" ? (
        <SelectPrimitive.Context>
          {(api) => children(api as UseSelectContext<T>)}
        </SelectPrimitive.Context>
      ) : (
        children
      )}
      <SelectPrimitive.HiddenSelect />
    </SelectPrimitive.Root>
  );
};

export const SelectControl = ({
  className,
  ...props
}: SelectPrimitive.ControlProps) => (
  <SelectPrimitive.Control
    className={cn("flex w-full min-w-0 flex-col gap-1.5", className)}
    {...props}
  />
);

export const SelectTrigger = ({ ...props }: SelectPrimitive.TriggerProps) => (
  <SelectPrimitive.Trigger data-slot="select-trigger" {...props} />
);

export type SelectValueProps<T extends CollectionItem = CollectionItem> = {
  children?: (api: UseSelectContext<T>) => ReactNode;
  placeholder?: string;
  className?: string;
};

export const SelectValue = <T extends CollectionItem = CollectionItem>({
  children,
  placeholder,
  className,
}: SelectValueProps<T>) => (
  <SelectPrimitive.Context>
    {(api) => {
      if (children) {
        return (
          <span
            {...api.getValueTextProps()}
            className={cn("min-w-0 flex-1 truncate text-left", className)}
            data-slot="select-value"
          >
            {children(api as UseSelectContext<T>)}
          </span>
        );
      }
      const text = api.valueAsString?.trim();
      return (
        <SelectPrimitive.ValueText
          placeholder={placeholder}
          className={cn(
            "min-w-0 flex-1 truncate text-left",
            !text && "text-muted-foreground",
            className,
          )}
          data-slot="select-value"
        />
      );
    }}
  </SelectPrimitive.Context>
);

export type SelectPopupProps = SelectPrimitive.ContentProps & {
  disablePortal?: boolean;
};

export const SelectPopup = ({
  className,
  disablePortal,
  ...props
}: SelectPopupProps) => {
  const inner = (
    <SelectPrimitive.Content
      className={cn(
        "outline-none flex max-h-[min(var(--available-height,20rem),20rem)] flex-col overflow-y-auto overscroll-contain rounded-lg border border-border bg-popover p-0.5 text-popover-foreground shadow-md",
        !disablePortal && "z-50",
        className,
      )}
      data-slot="select-content"
      {...props}
    />
  );
  return disablePortal ? (
    inner
  ) : (
    <Portal>
      <SelectPrimitive.Positioner>{inner}</SelectPrimitive.Positioner>
    </Portal>
  );
};

export type SelectItemProps = SelectPrimitive.ItemProps;

export const SelectItem = ({ className, ...props }: SelectItemProps) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      className,
    )}
    data-slot="select-item"
    {...props}
  />
);

export const SelectItemText = ({
  className,
  ...props
}: SelectPrimitive.ItemTextProps) => (
  <SelectPrimitive.ItemText
    className={cn("min-w-0 flex-1 truncate", className)}
    data-slot="select-item-text"
    {...props}
  />
);

export const SelectItemIndicator = ({
  className,
  children,
  ...props
}: SelectPrimitive.ItemIndicatorProps) => (
  <SelectPrimitive.ItemIndicator
    className={cn("text-primary", className)}
    data-slot="select-item-indicator"
    {...props}
  >
    {children ?? <CheckIcon className="size-4" />}
  </SelectPrimitive.ItemIndicator>
);

export const SelectItemGroup = ({
  className,
  ...props
}: SelectPrimitive.ItemGroupProps) => (
  <SelectPrimitive.ItemGroup
    className={cn("flex flex-col gap-0.5", className)}
    data-slot="select-item-group"
    {...props}
  />
);

export const SelectItemGroupLabel = ({
  className,
  ...props
}: SelectPrimitive.ItemGroupLabelProps) => (
  <SelectPrimitive.ItemGroupLabel
    className={cn(
      "px-2 py-1 font-medium text-muted-foreground text-xs uppercase tracking-wide",
      className,
    )}
    data-slot="select-item-group-label"
    {...props}
  />
);

export const SelectSeparator = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    role="separator"
    className={cn("-mx-0.5 my-1 h-px bg-border", className)}
    data-slot="select-separator"
    {...props}
  />
);

export const SelectLabel = ({
  className,
  ...props
}: SelectPrimitive.LabelProps) => (
  <SelectPrimitive.Label
    className={cn(
      "mb-1 block font-medium text-foreground text-sm select-none data-disabled:opacity-50",
      className,
    )}
    data-slot="select-label"
    {...props}
  />
);

export const SelectIndicator = ({
  className,
  children,
  ...props
}: SelectPrimitive.IndicatorProps) => (
  <SelectPrimitive.Indicator
    className={cn("shrink-0 text-muted-foreground", className)}
    data-slot="select-indicator"
    {...props}
  >
    {children ?? <ChevronDownIcon className="size-4 opacity-80" aria-hidden />}
  </SelectPrimitive.Indicator>
);

export type SelectClearTriggerProps = SelectPrimitive.ClearTriggerProps;

export const SelectClearTrigger = ({ ...props }: SelectClearTriggerProps) => (
  <SelectPrimitive.ClearTrigger {...props} />
);

export type SelectTriggerFieldProps = {
  showClear?: boolean;
  className?: string;
  children?: ReactNode;
  hideIndicator?: boolean;
  size?: VariantProps<typeof buttonVariants>["size"];
  containerClass?: string;
};

export const SelectTriggerField = ({
  showClear = false,
  className,
  children,
  hideIndicator,
  size = "default",
  containerClass,
  ...props
}: SelectTriggerFieldProps) => (
  <SelectPrimitive.Control asChild>
    <ButtonGroup className={cn("w-full min-w-0", containerClass)}>
      <SelectTrigger {...props} asChild>
        <Button
          variant={"outline"}
          size={size}
          className={cn("flex-1", className)}
        >
          {children}
          {showClear ? (
            <>
              <SelectClearTrigger asChild>
                <span role="button">
                  <XIcon />
                </span>
              </SelectClearTrigger>
            </>
          ) : null}
          {!hideIndicator && (
            <SelectIndicator className="inline-flex items-center justify-center" />
          )}
        </Button>
      </SelectTrigger>
    </ButtonGroup>
  </SelectPrimitive.Control>
);

export const SelectList = ({
  className,
  ...props
}: SelectPrimitive.ListProps) => (
  <SelectPrimitive.List
    className={cn("flex flex-col gap-0.5 p-0.5 outline-none", className)}
    data-slot="select-list"
    {...props}
  />
);

export type SelectGroupedListProps<T extends CollectionItem = CollectionItem> =
  {
    className?: string;
    items: readonly T[];
    children: (group: readonly [string, T[]]) => ReactNode;
  };

export const SelectGroupedList = <T extends CollectionItem = CollectionItem>({
  items,
  className,
  children,
}: SelectGroupedListProps<T>) => {
  // `useSelectContext()` is not generic over `T`; collection matches `T` when used under `<Select<T>>`.
  const { collection } = useSelectContext();
  const typedCollection = collection as ListCollection<T>;
  const groups = typedCollection.group();
  return (
    <div
      className={cn("flex flex-col gap-1 p-0.5 outline-none", className)}
      data-slot="select-grouped-list"
    >
      {groups.map((tuple: readonly [string, (typeof items)[number][]]) => (
        <Fragment key={tuple[0]}>{children(tuple)}</Fragment>
      ))}
    </div>
  );
};

export const SelectEmpty = ({ className, ...props }: ComponentProps<"div">) => {
  const { collection } = useSelectContext();
  if (collection.size > 0) {
    return null;
  }
  return (
    <div
      role="presentation"
      className={cn(
        "rounded-md px-2 py-3 text-center text-muted-foreground text-sm",
        className,
      )}
      data-slot="select-empty"
      {...props}
    />
  );
};

export const SelectContext = SelectPrimitive.Context;

export type SelectItemContextProps = SelectPrimitive.ItemContextProps;

export const SelectItemContext = SelectPrimitive.ItemContext;
