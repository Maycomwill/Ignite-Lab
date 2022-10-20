import { Spinner } from "phosphor-react";
import { HTMLAttributes } from "react";
import { Text } from "./Text";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement>{
}

export function Loading() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <Text size="xlg" className="animate-pulse">
        Carregando, aguarde um momento...
      </Text>
      <div className="animate-spin-slow text-green-500">
        <Spinner size={48} />
      </div>
    </div>
  );
}
