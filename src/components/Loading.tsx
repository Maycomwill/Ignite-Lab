import { Spinner } from "phosphor-react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {}

export function Loading() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center gap-4">
      <div>
        <Text size="xlg" className="animate-pulse">
          Carregando, aguarde um momento...
        </Text>
      </div>
      <div className="animate-spin-slow text-green-500">
        <Spinner size={48} />
      </div>
      <div>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
}
