import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string,
}

export interface TextInputRootProps {
  children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='py-4 px-3 h-12 flex items-center gap-3 rounded bg-gray-800 outline-none focus-within:ring-2 ring-green-500 w-full'>
      {props.children}
    </div>
  )
}

export interface TextInputIconProps {

  children: ReactNode

}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot
      className='w-6 h-6 text-green-500'
    >
      {props.children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-xsm text-green-200 placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}