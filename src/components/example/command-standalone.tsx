import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandItemText,
  CommandList,
  CommandPanel,
  CommandPopup,
} from "@/components/ui/command";

const COMMAND_STANDALONE_ITEMS = [
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { label: "Billing", value: "billing" },
  { label: "Log out", value: "logout" },
] as const;

const CommandStandaloneDemo = () => (
  <CommandPanel className="max-w-md">
    <Command autoFocus={false} items={[...COMMAND_STANDALONE_ITEMS]} open>
      <CommandInput placeholder="Type a command…" />
      <CommandPopup>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList items={[...COMMAND_STANDALONE_ITEMS]}>
          {(item) => (
            <CommandItem key={item.value} item={item}>
              <CommandItemText>{item.label}</CommandItemText>
            </CommandItem>
          )}
        </CommandList>
      </CommandPopup>
    </Command>
  </CommandPanel>
);

export default CommandStandaloneDemo;
