import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React, { ReactNode } from 'react'

interface IconProps {
  className?: string;
  children: ReactNode; 
}
export function Icon({ className, children }: IconProps) {
  return (
  
        <Slot className={clsx("text-gray-900 w-6 h-6", className)}>
          {children}
        </Slot>    
  );
  }