import { Meta, StoryObj } from '@storybook/react'
import { TurmaCard, TurmaCardProps } from "./TurmaCard";

export default {
  title: 'Components/TurmaCard',
  component: TurmaCard,
  args: {
    turmaName: '2º ano A',
  },
  argTypes: {}
} as Meta<TurmaCardProps>

export const Default: StoryObj<TurmaCardProps> = {}
