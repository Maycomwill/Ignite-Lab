import { Meta, StoryObj } from "@storybook/react";
import { User } from "phosphor-react";
import { AlunoCard, AlunoCardRootProps } from "./AlunoCard";

export default {
  title: "Components/AlunoCard",
  component: AlunoCard.Root,
  args: {
    children: [
      <AlunoCard.Icon>
        <User />
      </AlunoCard.Icon>,
      <AlunoCard.Content
        nome="Maycom Willams de Farias Silva"
        turma="3º ano A"
        turno="Diurno"
        alunoId="Id"
      ></AlunoCard.Content>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AlunoCardRootProps>;

export const Default: StoryObj<AlunoCardRootProps> = {};
