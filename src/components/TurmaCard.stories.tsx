import { Meta, StoryObj } from "@storybook/react";
import { TurmaCard, TurmaCardRootProps } from "./TurmaCard";

export default {
  title: "Components/TurmaCard",
  component: TurmaCard,
  args: {
    turmaName: "2º ano A",
  },
  argTypes: {},
} as Meta<TurmaCardRootProps>;

export const Default: StoryObj<TurmaCardRootProps> = {};
