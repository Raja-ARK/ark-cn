import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupedList,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemText,
  CommandPopup,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

type CommandPaletteItem = {
  label: string;
  value: string;
  shortcut?: string;
  group: "Suggestions" | "Commands";
};

const COMMAND_PALETTE_ITEMS: CommandPaletteItem[] = [
  { group: "Suggestions", label: "Linear", shortcut: "⌘L", value: "linear" },
  { group: "Suggestions", label: "Figma", shortcut: "⌘F", value: "figma" },
  { group: "Suggestions", label: "Slack", shortcut: "⌘S", value: "slack" },
  {
    group: "Commands",
    label: "Clipboard history",
    shortcut: "⌘⇧C",
    value: "clipboard",
  },
  {
    group: "Commands",
    label: "Create snippet",
    shortcut: "⌘N",
    value: "snippet",
  },
  {
    group: "Commands",
    label: "System preferences",
    shortcut: "⌘,",
    value: "prefs",
  },
];

const CommandPaletteDemo = () => {
  const [open, setOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog
      onOpenChange={(d) => {
        setOpen(d.open);
        if (d.open) setResetKey((k) => k + 1);
      }}
      open={open}
    >
      <CommandDialogTrigger asChild>
        <Button variant="outline">
          Open command palette
          <span className="ms-1 hidden text-muted-foreground text-xs sm:inline">
            ⌘b
          </span>
        </Button>
      </CommandDialogTrigger>
      <CommandDialogPopup aria-label="Command palette">
        <Command
          key={resetKey}
          groupBy={(item) => item.group}
          groupSort={["Suggestions", "Commands"]}
          items={COMMAND_PALETTE_ITEMS}
          open={open}
          onOpenChange={(d) => {
            if (!d.open) setOpen(false);
          }}
          onValueChange={() => {
            setOpen(false);
          }}
        >
          <CommandInput placeholder="Search for apps and commands…" />
          <CommandPopup>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroupedList items={COMMAND_PALETTE_ITEMS}>
              {([group, groupItems]) => (
                <Fragment key={group}>
                  <CommandGroup>
                    <CommandGroupLabel>{group}</CommandGroupLabel>
                    {groupItems.map((item) => (
                      <CommandItem key={item.value} item={item}>
                        <CommandItemText>{item.label}</CommandItemText>
                        {item.shortcut ? (
                          <CommandShortcut>{item.shortcut}</CommandShortcut>
                        ) : null}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  {group !== "Commands" ? <CommandSeparator /> : null}
                </Fragment>
              )}
            </CommandGroupedList>
          </CommandPopup>
          <CommandFooter>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <kbd className="pointer-events-none inline-flex h-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
                  <ArrowUpIcon className="size-2.5 opacity-80" />
                </kbd>
                <kbd className="pointer-events-none inline-flex h-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
                  <ArrowDownIcon className="size-2.5 opacity-80" />
                </kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="pointer-events-none inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
                  <CornerDownLeftIcon className="size-2.5 opacity-80" />
                </kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="pointer-events-none inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-medium font-mono text-muted-foreground text-xs shadow-xs">
                Esc
              </kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
};

export default CommandPaletteDemo;
