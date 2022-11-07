import { HTMLAttributes } from "react";
import { Text } from "./Text";
import * as RadixSelect from "@radix-ui/react-select";

export interface RadixSelectProps extends HTMLAttributes<HTMLSelectElement> {}

export function Select() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <RadixSelect.Root>
        <RadixSelect.Trigger>
          <RadixSelect.Value />
          <RadixSelect.Icon />
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content>
            <RadixSelect.ScrollUpButton />
            <RadixSelect.Viewport>
              <RadixSelect.Item value="AAA">
                <RadixSelect.ItemText>aaaa</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator />
              </RadixSelect.Item>

              <RadixSelect.Group>
                <RadixSelect.Label />
                <RadixSelect.Item value="BBB">
                  <RadixSelect.ItemText>bbbb</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator />
                </RadixSelect.Item>
              </RadixSelect.Group>

              <RadixSelect.Separator />
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton />
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}
