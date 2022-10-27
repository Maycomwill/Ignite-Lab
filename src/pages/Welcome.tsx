import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

import { Text } from "../components/Text";
import { Spinner } from "phosphor-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { SVGHome } from "../components/SVGHome";
import { Heading } from "../components/Heading";
import { LogIn } from "./LogIn";
import { Home } from "./Home";
import { Loading } from "../components/Loading";
import MainFooter from "../components/MainFooter";

export function Welcome() {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  if (loading && !user) {
    <Loading />;
  }

  if (user) {
    return (
      <div className="flex h-full w-full justify-start items-center flex-col gap-4 bg-gray-900">
        <Home />
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex w-full h-full items-center justify-center bg-gray-900">
          <div
            id="left-side"
            className="flex flex-1 flex-col items-center gap-4 justify-center px-4 py-4"
          >
            <div className="flex w-full items-center justify-center">
              <Heading size="xlg">
                Bem vindo a{" "}
                <span className="text-green-500">Caderneta Digital</span>
              </Heading>
            </div>
            <div className="w-[80%] flex flex-col gap-4 items-start">
              <Text className="text-justify">
                Aqui você tem a simplicidade de organizar as informações sobre
                suas turmas, alunos, notas e frequências.
              </Text>
              <Text>
                Plataforma desenvolvida de professor para professores!
              </Text>
            </div>
            <SVGHome width={400} height={400} />
          </div>

          <div
            id="right-side"
            className="w-[50%] flex flex-col items-center justify-center px-4 py-4"
          >
            <LogIn />
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}
