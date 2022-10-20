import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
  size?: "xsm" | "sm" | "md" | "lg";
  className?: string;
}

export function Button({ children, asChild, className, size = "md", ...props }: ButtonProps) {

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-green-500 rounded font-semibold text-gray-900 w-full text-md transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-green-300',
        {
          'py px-1' : size === 'xsm',
          'py-1 px-2': size === 'sm',
          'py-3 px-4': size === 'md',
          'py-4 px-6': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}