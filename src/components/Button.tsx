import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, ...props }: ButtonProps) {

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-green-500 rounded font-semibold text-gray-900 w-full text-md transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-green-300',
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}