import { ReactElement, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";

import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SVGHome } from "../components/SVGHome";
import { EnvelopeSimple, Lock, Spinner, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface RegisterProps extends ReactElement {}

export function Register(): RegisterProps {
  const navigate = useNavigate();
  const auth = getAuth();
  const docCollectionRef = collection(db, "users");

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  async function handleSignIn(e: any) {
    if (password === repassword) {
      setLoading(true),
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            handleLoginRedirect();
          })
          .then(async function createUserInDB() {
            const user = await addDoc(docCollectionRef, {
              name: name,
              lastName: lastName,
              email: email,
              createdAt: serverTimestamp(),
            });
            console.log(user);
          })
          .catch((e) => {
            console.log("Error ao criar usuário", e);
            alert("Usuário já existente")
            setLoading(false);
          });
    } else {
      e.preventDefault();
      alert("As senhas devem ser identicas!");
    }
  }

  function handleLoginRedirect() {
    setLoading(false);
    navigate("/");
  }
  if (loading) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
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
    <div className="w-screen h-full text-gray-100 flex flex-col items-center justify-center bg-gray-900">
      <header className="flex items-center flex-col">
        <SVGHome width={300} height={300} />
        <Heading size="xlg" className="text-gray-100">
          Caderneta Digital
        </Heading>
        <Text size="md" className="text-gray-200">
          Preencha os campos e cadastre-se agora
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch mt-8 w-full max-w-sm"
      >
        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Seu Nome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <UserCircle />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              autoComplete="username"
              id="name"
              placeholder="Digite seu nome"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="sobrename" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Seu sobrenome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <UserCircle />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              autoComplete="username"
              id="lastname"
              placeholder="Digite seu sobrenome"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
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
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="false"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="repassword" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Confirme sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              autoComplete="false"
              id="repassword"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>
        <Button type="submit">Cadastrar-se</Button>
      </form>
      <footer className="mt-4 flex flex-col items-center gap-2 mb-8"></footer>
    </div>
  );
}
