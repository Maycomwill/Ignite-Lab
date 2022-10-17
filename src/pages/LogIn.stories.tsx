import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { LogIn } from "./LogIn";

export default {
  title: 'Pages/LogIn',
  component: LogIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sections", (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'maycom.willams@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '111222333')


    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return (expect(canvas.getByText('Login realizado!')).toBeInTheDocument())
    })
  }
}
