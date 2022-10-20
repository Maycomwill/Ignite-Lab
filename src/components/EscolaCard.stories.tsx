import { Meta, StoryObj } from "@storybook/react";
import { EscolaCard, EscolaCardProps } from "./EscolaCard";

export default {
  title: "Components/EscolaCard",
  component: EscolaCard,
  args: {
    escolaName: "EREM Fernando Mota",
  },
  argTypes: {},
} as Meta<EscolaCardProps>;

export const Default: StoryObj<EscolaCardProps> = {};
