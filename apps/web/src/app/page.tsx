"use client";
import { Button } from "@repo/ui/components/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">Web</h1>
      <Button variant={"default"}>web</Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}
