import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type User = {
  email: string;
  id: string;
  name: string;
};

const users: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "2", name: "Bob Smith", email: "bob@example.com" },
  { id: "3", name: "Carol Davis", email: "carol@example.com" },
];

const DialogMultipleTriggersDemo = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <Dialog
      onTriggerValueChange={(details) => {
        setActiveUser(users.find((user) => user.id === details.value) ?? null);
      }}
    >
      <div className="flex flex-wrap gap-2">
        {users.map((user) => (
          <DialogTrigger asChild key={user.id} value={user.id}>
            <Button size="sm" variant="outline">
              Edit {user.name}
            </Button>
          </DialogTrigger>
        ))}
      </div>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit user</DialogTitle>
          <DialogDescription>
            Multiple triggers open one dialog and pass the selected user through
            trigger value.
          </DialogDescription>
        </DialogHeader>
        {activeUser ? (
          <>
            <DialogPanel className="grid gap-3">
              <Input aria-label="Name" defaultValue={activeUser.name} />
              <Input
                aria-label="Email"
                defaultValue={activeUser.email}
                type="email"
              />
            </DialogPanel>
            <DialogFooter>
              <DialogClose asChild>
                <Button size="sm" type="button" variant="ghost">
                  Cancel
                </Button>
              </DialogClose>
              <Button size="sm" type="button">
                Save
              </Button>
            </DialogFooter>
          </>
        ) : null}
      </DialogPopup>
    </Dialog>
  );
};

export default DialogMultipleTriggersDemo;
