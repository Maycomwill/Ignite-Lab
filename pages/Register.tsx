import { ReactElement, useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "../services/firebaseConfig";

import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SVGHome } from "../components/SVGHome";
import { EnvelopeSimple, Lock, Spinner, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface RegisterProps extends ReactElement {

}

export function Register(): RegisterProps {

  const navigate = useNavigate();

  const [textHidden, setTextHidden] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  async function handleSignIn() {
    if (password != repassword) {
      return (
        alert("Algum campo foi preenchido de forma indevida")
      );
    };

    if (error) {
      return(
        console.log(error)
      )
    };

    await createUserWithEmailAndPassword(email, password).then(handleLoginRedirect)
  }

  function handleLoginRedirect() {
    return (
      navigate('/')
    );
  }

  if (loading) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
        <Text size="xlg" className="animate-pulse">Loading...</Text>
        <div className="animate-spin-slow text-green-500">
          <Spinner size={48} />
        </div>
      </div>
    );
  }


  return (
    <div className='w-screen h-full text-gray-100 flex flex-col items-center justify-center bg-gray-900'>
      <header className='flex items-center flex-col'>
        <SVGHome width={300} height={300} />
        <Heading size='xlg' className='text-gray-100'>Caderneta Digital</Heading>
        <Text size='md' className='text-gray-200'>Preencha os campos e cadastre-se agora</Text>
      </header>
      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch mt-8 w-full max-w-sm'>
        <label htmlFor='name' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Seu Nome
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <UserCircle />
            </TextInput.Icon>
            <TextInput.Input onChange={(e) => setName(e.target.value)} type='text' autoComplete="username" id='name' placeholder='Digite seu nome completo' />
          </TextInput.Root>
        </label>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Endereço de E-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input onChange={(e) => setEmail(e.target.value)} type='email' autoComplete="email" id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input onChange={(e) => setPassword(e.target.value)} type='password' autoComplete="false" id='password' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>
        <label htmlFor='repassword' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Confirme sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input onChange={(e) => setRePassword(e.target.value)} type='password' autoComplete="false" id='repassword' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
        </label>

        <Button type='submit'>
          Cadastrar-se
        </Button>
      </form>
      <footer className='mt-4 flex flex-col items-center gap-2 mb-8'>
      </footer>
    </div>
  )
}