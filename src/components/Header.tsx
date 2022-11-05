import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { auth } from "../services/firebaseConfig";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Loading } from "./Loading";
import { Text } from "./Text";

export function Header() {
  const [user, loading, error] = useAuthState(auth);
  const { userData } = useUser();
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  if (userData) {
    return (
      <div className="flex w-full items-center justify-between gap-4 p-4">
        <Heading>Bem vindo (a),</Heading>
        <div className="flex w-[30%] gap-2 items-center justify-end">
          <Text>{userData?.name}</Text>
          <img
            className="rounded-full w-8 ring-2 ring-green-500 shadow-sm"
            src={userData?.photoURL}
            alt="User Image from Google Account"
          />
          <div className="">
            <Button size="sm" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
