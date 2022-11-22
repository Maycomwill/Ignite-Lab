import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";

export function BlankPage() {
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
    <div className="w-96 gap-4 flex flex-col items-strech text-center">
      <Text className="text-xlg">Não há nada aqui</Text>
      <Link to="/">
        <Button>Volte para a Home</Button>
      </Link>
    </div>
  </div>
  )
}
