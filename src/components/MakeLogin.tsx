import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";

export function MakeLogin() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-4">
    <Text size="lg">Por favor, faça login para ter acesso a plataforma</Text>
    <Link to="/">
      <Button>Home</Button>
    </Link>
  </div>
  )
}