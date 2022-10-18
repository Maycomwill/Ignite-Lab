import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';


import { Text } from "../components/Text";
import { Spinner } from 'phosphor-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { SVGHome } from '../components/SVGHome';
import { Heading } from '../components/Heading';
import { LogIn } from './LogIn';
import { Home } from './Home';



export function Welcome() {

  const navigate = useNavigate()

  const logout = () => {
    signOut(auth);
  };

  const [user, loading, error] = useAuthState(auth);

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
  if (user) {
    return (
      <div className="flex h-screen w-screen justify-center items-center flex-col gap-4 bg-gray-900">
        <div className='flex w-screen items-center justify-between px-4 gap-4'>
        <Heading>Welcome</Heading>
        <Text>{user.email}</Text>
        </div>
        <Home />
        <div className='w-[25%]'>
          <Button onClick={logout}>Log out</Button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex w-screen h-screen items-center justify-center bg-gray-900'>
        <div id='left-side' className='flex flex-1 flex-col items-center gap-4 justify-center px-4 py-4'>
          <div className='flex w-full items-center justify-center'>
            <Heading size='xlg'>Bem vindo a <span className='text-green-500'>Caderneta Digital</span></Heading>
          </div>
          <div className='w-[80%] flex flex-col gap-4 items-start'>
            <Text className='text-justify'>Aqui você tem a simplicidade de organizar as informações sobre suas turmas, alunos, notas e frequências.</Text>
            <Text>Plataforma desenvolvida de professor para professores!</Text>
          </div>
          <SVGHome width={400} height={400} />
        </div>

        <div id='right-side' className='w-[50%] flex flex-1 flex-col items-center justify-center px-4 py-4'>
          <LogIn />
        </div>
      </div>
    )
  };

};