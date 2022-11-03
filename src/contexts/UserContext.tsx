import { createContext, ReactNode, useState } from "react";

interface UserProps {
  name: string;
  email: string;
  photoURL?: string;
  userId?: string;
}

export interface UserContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface UserProviderProps{
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextDataProps);

export function UserContextProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function signIn(){
    console.log("Usou a função de login do contexto")
  }
  return (
    <UserContext.Provider
      value={{
        signIn,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
