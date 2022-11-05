import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

import { CheckedState } from "@radix-ui/react-checkbox";
import { Spinner } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { SVGGoogle } from "../components/SVGGoogle";
// import { loginWithGoogle } from "../services/loginWithGoogle";
import { useUser } from "../hooks/useUser";

export function LogIn() {
  const navigate = useNavigate();
  const { signInWithGoogle, userData } = useUser();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleLoggedRedirect() {
    if (user) {
      console.log(user);
      navigate("/");
    }
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <Heading size="md">{error.message}</Heading>
        <Button onClick={() => window.location.reload()}>Retornar</Button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="h-full w-full bg-gray-900 flex flex-col items-center justify-center">
        <Text size="xlg" className="animate-pulse">
          Loading...
        </Text>
        <div className="animate-spin-slow text-green-500">
          <Spinner size={48} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full text-gray-100 flex flex-col items-center justify-center bg-gray-900">
      <header className="flex items-center flex-col w-full">
        <Heading size="xlg">
          Bem vindo a <span className="text-green-500">Caderneta Digital</span>
        </Heading>
      </header>
      <section className="mt-4 w-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="w-[80%] flex flex-col gap-4 items-start text-justify">
            <Text>
              Aqui você tem a simplicidade de organizar as informações sobre
              suas turmas, alunos, notas e frequências.
            </Text>
            <Text>Plataforma desenvolvida de professor para professores!</Text>
            <Text>
              Para fazer login na plataforma, é necessário uma conta google.
            </Text>
            <Text>
              Basta clicar no botão abaixo, selecionar uma conta e pronto, você
              já faz parte da nossa plataforma, aproveite todos os recursos
              disponíveis!
            </Text>
          </div>

          <div className="w-[50%] pt-8">
            <Button
              version="PRIMARY"
              onClick={signInWithGoogle}
              className="flex gap-4"
            >
              <SVGGoogle width={30} height={30} /> Login com Google
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
