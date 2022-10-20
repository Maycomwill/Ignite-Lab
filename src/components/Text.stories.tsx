import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    size: "sm",
    children: "Loren Ipsum",
  },
  argTypes: {
    size: {
      options: ["xsm", "sm", "md", "lg", "xlg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Testando</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
