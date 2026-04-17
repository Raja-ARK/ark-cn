import { EllipsisVerticalIcon } from "lucide-react";
import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

const MESSAGE_ROWS = [
  {
    id: "1",
    sender: "Alice Johnson",
    preview: "Hey, can you review the latest PR?",
  },
  {
    id: "2",
    sender: "Bob Smith",
    preview: "Meeting notes from today are attached.",
  },
  {
    id: "3",
    sender: "Carol Davis",
    preview: "The deploy finished successfully!",
  },
] as const;

const MenuMultipleTriggersDemo = () => (
  <Menu positioning={{ placement: "right-start" }}>
    <div className="flex w-full max-w-md flex-col gap-1">
      {MESSAGE_ROWS.map((message) => (
        <div
          className="flex items-center gap-3 rounded-lg border border-border px-3 py-2"
          key={message.id}
        >
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-foreground text-xs">
              {message.sender}
            </p>
            <p className="truncate text-muted-foreground text-xs">
              {message.preview}
            </p>
          </div>
          <MenuTrigger
            aria-label="Message actions"
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
            type="button"
            value={message.id}
          >
            <EllipsisVerticalIcon className="size-4" />
          </MenuTrigger>
        </div>
      ))}
    </div>
    <MenuPopup>
      <MenuItem value="reply">
        <MenuItemText>Reply</MenuItemText>
      </MenuItem>
      <MenuItem value="forward">
        <MenuItemText>Forward</MenuItemText>
      </MenuItem>
      <MenuItem value="archive">
        <MenuItemText>Archive</MenuItemText>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="delete">
        <MenuItemText>Delete</MenuItemText>
      </MenuItem>
    </MenuPopup>
  </Menu>
);

export default MenuMultipleTriggersDemo;
