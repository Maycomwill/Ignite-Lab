import clsx from "clsx";
import { House } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export interface EscolaCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  escolaName: string;
}

export function EscolaCard({ escolaName, ...props }: EscolaCardProps) {
  return (
      <Button {...props}>
        <div className="flex items-center">
          <House size={20} weight={"fill"} />
        <div className="flex flex-1 justify-center items-center ">
          Escola: {escolaName}
        </div>
        </div>
      </Button>
  );
}
