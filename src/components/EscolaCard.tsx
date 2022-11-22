import clsx from "clsx";
import { House } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export interface EscolaCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  escolaName: string;
}

export function EscolaCard({ escolaName, ...props }: EscolaCardProps) {
  return (
    <div className="h-40 max-h-44 flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-md w-80 px-4 py-4 text-center border-b-4 border-green-500">
      <div className="flex flex-col items-center justify-center ">
        <House size={25} weight={"fill"} className="text-green-500" />
        <div>
          <Text>Escola: {escolaName}</Text>
        </div>
      </div>
      <Button {...props}>Mais detalhes</Button>
    </div>
  );
}
