import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    size: "lg",
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
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
