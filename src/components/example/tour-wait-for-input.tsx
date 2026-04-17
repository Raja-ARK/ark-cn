import { RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  useTour,
  waitForEvent,
} from "@/components/ui/tour";

const TourWaitForInputDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setTerms(false);
  };

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Form tutorial",
        description:
          "Each step waits until the current field contains valid input.",
        actions: [{ label: "Start", action: "next" }],
      },
      {
        id: "name",
        type: "tooltip",
        arrow: true,
        title: "Enter your name",
        description: "Type at least two characters to continue.",
        target: () => document.querySelector("#tour-form-name"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-name");
          if (!input) return;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "input",
            {
              predicate: (el) => el.value.trim().length >= 2,
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "email",
        type: "tooltip",
        arrow: true,
        title: "Enter your email",
        description: "A valid email address unlocks the next step.",
        target: () => document.querySelector("#tour-form-email"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-email");
          if (!input) return;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "input",
            {
              predicate: (el) => emailRegex.test(el.value),
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "terms",
        type: "tooltip",
        arrow: true,
        title: "Accept the terms",
        description: "Check the box to complete the tutorial.",
        target: () => document.querySelector("#tour-form-terms"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-terms");
          if (!input) return;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "change",
            {
              predicate: (el) => el.checked,
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "done",
        type: "dialog",
        title: "Form complete",
        description: "The tour advanced only after valid input was present.",
        actions: [{ label: "Done", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <div className="flex flex-wrap gap-2">
        <TourLaunchButton
          label="Start form tour"
          onClick={() => {
            resetForm();
            tour.start();
          }}
        />
        <Button onClick={resetForm} type="button" variant="ghost">
          <RotateCcwIcon className="size-4" />
          Reset
        </Button>
      </div>
      <div className="grid gap-3 rounded-xl border border-border/70 bg-muted/15 p-4">
        <Field>
          <FieldLabel htmlFor="tour-form-name">Name</FieldLabel>
          <Input
            id="tour-form-name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada Lovelace"
            value={name}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="tour-form-email">Email</FieldLabel>
          <Input
            id="tour-form-email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ada@example.com"
            type="email"
            value={email}
          />
        </Field>
        <label className="inline-flex items-center gap-2 text-sm text-foreground">
          <input
            checked={terms}
            className="size-4 accent-primary"
            id="tour-form-terms"
            onChange={(event) => setTerms(event.target.checked)}
            type="checkbox"
          />
          I accept the terms and conditions
        </label>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourWaitForInputDemo;
