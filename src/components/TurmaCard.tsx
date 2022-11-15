import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";

export interface TurmaCardRootProps {
  children: ReactNode;
}

function TurmaCardRoot({ children }: TurmaCardRootProps) {
  return (
    <div className="h-40 max-h-44 flex flex-col items-center justify-evenly gap-2 bg-gray-800 rounded-md w-80 px-4 py-4 text-center border-b-4 border-green-500">
      {children}
    </div>
  );
}

export interface TurmaCardIconProps {
  className?: string;
  children: ReactNode;
}

function TurmaCardIcon({ className, children }: TurmaCardIconProps) {
  return (
    <Slot className={clsx("text-green-500 w-6 h-6", className)}>
      {children}
    </Slot>
  );
}

export interface TurmaCardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  nome: string;
  turmaid: string;
  escolaid: string;
}

function TurmaCardContent(props: TurmaCardContentProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-1 justify-center items-center " {...props}>
        <Text color="white">Turma(a): {props.nome}</Text>
      </div>
      <div>
        <Button size="sm" onClick={() => navigate(`${props.turmaid}`)}>
          Mais detalhes
        </Button>
      </div>
    </div>
  );
}

export const TurmaCard = {
  Root: TurmaCardRoot,
  Icon: TurmaCardIcon,
  Content: TurmaCardContent,
};
