import { HTMLAttributes } from "react";
import { Text } from "./Text";
import * as RadixSelect from "@radix-ui/react-select";
import { useClass } from "../hooks/useClasses";
import { useSchool } from "../hooks/useSchools";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";

export interface RadixSelectProps extends HTMLAttributes<HTMLSelectElement> {}

export function TurmaSelect() {
  const { schoolData } = useSchool();
  return (
    <div className="w-full bg-gray-800 flex justify-between rounded">
      <RadixSelect.Root>
        <RadixSelect.Trigger
          aria-label="Schools Select"
          className="flex justify-between items-center w-full h-12 py-4 px-3 rounded outline-none"
        >
          <RadixSelect.Value
            placeholder="Selecione uma escola"
            className={clsx(
              "placeholder:text-gray-200",
              "bg-purple-500"
            )}
          />
          <RadixSelect.Icon className="text-gray-200">
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content>
            <RadixSelect.ScrollUpButton>
              <ChevronUpIcon />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className="py-4 px-3 h-12 gap-3 rounded bg-gray-800 outline-none">
              <RadixSelect.Item
                value="AAA"
                className="flex items-center px-8 py-2 rounded-md text-xsm text-gray-200 focus:bg-gray-900"
              >
                <RadixSelect.ItemText>aaaa</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="inline-flex items-center">
                  <CheckIcon />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
              <RadixSelect.Item
                value="BBB"
                className="flex items-center px-8 py-2 rounded-md text-xsm text-gray-200 focus:bg-gray-900"
              >
                <RadixSelect.ItemText>BBB</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="inline-flex items-center">
                  <CheckIcon />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
              <RadixSelect.Separator />
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton />
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}
