import { FormEvent, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "../components/Checkbox";
import { EnvelopeSimple, Lock, Spinner } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { SVGGoogle } from "../components/SVGGoogle";
import { loginWithGoogle } from "../services/loginWithGoogle";
import LoginWithGoogle from "../components/LoginWithGoogle";


export function LogIn() {
  const [isRememberChecked, setIsRememberChecked] = useState<CheckedState>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function handleSignInWithEmailandPassword(e: FormEvent) {
    e.preventDefault();

    await signInWithEmailAndPassword(email, password).then(
      handleLoggedRedirect
    );
  }

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
      <header className="flex items-center flex-col">
        <Heading size="xlg" className="text-gray-100">
          Caderneta Digital
        </Heading>
        <Text size="md" className="text-gray-200">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignInWithEmailandPassword}
        className="flex flex-col gap-4 items-stretch mt-8 w-full max-w-sm"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={isRememberChecked}
            onCheckedChange={setIsRememberChecked}
          />
          <Text size="sm" className="text-gray-200">
            Lembrar-me de mim por 30 dias!
          </Text>
        </label>

        <Button type="submit">Entrar na plataforma</Button>
      </form>
      <footer className="mt-4 flex flex-col items-center gap-2 mb-8">
        <LoginWithGoogle />
        <Text asChild size="xsm">
          <a
            href=""
            className="text-gray-400 underline transitions-colors hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="xsm">
          <Link
            to="/register"
            className="text-gray-400 underline transitions-colors hover:text-gray-200"
          >
            Não possui conta? Crie uma agora!
          </Link>
        </Text>
      </footer>
    </div>
  );
}
