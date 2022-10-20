import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

export function Header() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth);
    navigate('/')
  };


  if (user) {
    return (
      <div className="flex w-screen items-center justify-between gap-4">
        <Heading>Bem vindo (a),</Heading>
        <div className="flex w-[30%] gap-2 items-center justify-end">
          <Text>{user.email}</Text>
          <div className="">
            <Button size="sm" onClick={logout}>Sair</Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Text>Usuário deslogado, por favor, faça login!</Text>
        <Link to="/">
          <Button>Faça login</Button>
        </Link>
      </div>
    );
  }
}