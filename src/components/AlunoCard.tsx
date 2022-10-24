import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";

export interface AlunoCardRootProps {
  children: ReactNode;
}

function AlunoCardRoot({children }: AlunoCardRootProps) {
  return (
    <div className="h-40 max-h-44 flex flex-col items-center justify-evenly gap-2 bg-gray-800 rounded w-80 px-4 py-4 text-center shadow-md">
      {children}
    </div>
  );
}

export interface AlunoCardIconProps {
  className?: string;
  children: ReactNode;
}

function AlunoCardIcon({ className, children }: AlunoCardIconProps) {
  return <Slot className="text-green-500 w-6 h-6 ">{children}</Slot>;
}

export interface AlunoCardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  nome: string;
  turma: string;
  turno: string;
  alunoId: number;
}

function AlunoCardContent(props: AlunoCardContentProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-1 justify-center items-center " {...props}>
        <Text color="white">Aluno(a): {props.nome}</Text>
      </div>
      <div>
        <Button size="sm" onClick={() => navigate(`/${props.alunoId}`)}>Mais detalhes</Button>
      </div>
    </div>
  );
};


export const AlunoCard = {
  Root: AlunoCardRoot,
  Icon: AlunoCardIcon,
  Content: AlunoCardContent,
}
