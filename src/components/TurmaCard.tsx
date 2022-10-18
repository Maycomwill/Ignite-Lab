import { HTMLAttributes } from 'react';
import { Button } from './Button';

export interface TurmaCardProps extends HTMLAttributes<HTMLDivElement> {
  turmaName: string;
}

export function TurmaCard({ turmaName, ...props }: TurmaCardProps) {

  return (
    <div className='text-gray-900'> 
    <Button className='py-3 px-4 bg-green-500 rounded font-bold  w-full text-md transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-green-300'
    >
     Turma: {turmaName}
    </Button>
    </div>
  )
}