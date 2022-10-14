import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-purple-500 rounded font-semibold text-gray-100 w-full text-md transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-purple-400',
      )}
    >
      {children}
    </Comp>
  )
}