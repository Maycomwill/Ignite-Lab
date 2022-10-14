import { EnvelopeSimple, Lock } from 'phosphor-react'
import Logo from './assets/SVGDARK.svg'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/main.css'

function App() {

  return (
    <div className='w-screen h-full text-gray-100 flex flex-col items-center justify-center bg-gray-900'>
    <header className='flex items-center flex-col'>
      <img src={Logo} className="w-52 h-w-52" alt="Logo" />
      <Heading size='xlg' className='text-gray-100 mt-4'>Ignite Lab</Heading>
      <Text size='md' className='text-gray-200 mt-1'>Faça login e comece a usar!</Text>
    </header>

    <form className='flex flex-col gap-4 items-stretch mt-4 w-full max-w-sm'>
      <label htmlFor='email'className='flex flex-col gap-3'>
        <Text className='text-sm font-semibold'>
          Endereço de E-mail
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <EnvelopeSimple />
          </TextInput.Icon>
          <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
        </TextInput.Root>
      </label>
      <label htmlFor='email'className='flex flex-col gap-3'>
        <Text className='text-sm font-semibold'>
            Sua senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input id='password' placeholder='************' type='password' />
        </TextInput.Root>
      </label>

      <label htmlFor='remember' className='flex items-center gap-2'>
        <Checkbox id='remember'/>
        <Text size='sm' className='text-gray-200'>Lembrar-me de mim por 30 dias!</Text>
      </label>

      <Button type='submit'>
        Entrar na plataforma
      </Button>
    </form>
    <footer className='mt-4 flex flex-col items-center gap-2 mb-8'>
      <Text asChild size='sm'>
      <a href='' className='text-gray-400 underline'>Esqueceu sua senha?</a>
      </Text>
      <Text asChild size='sm'>
      <a href='' className='text-gray-400 underline'>Não possui conta? Crie uma agora!</a>
      </Text>

    </footer>
    </div>
  )
}

export default App
