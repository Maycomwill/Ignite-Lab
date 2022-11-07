import { ReactNode } from "react";

import { UserContextProvider } from "../contexts/UserContext";
import { SchoolsContextProvider } from "../contexts/SchoolsContext";
import { ClassesContextProvider } from "../contexts/ClassesContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UserContextProvider>
      <SchoolsContextProvider>
        <ClassesContextProvider>
          {children}
        </ClassesContextProvider>
      </SchoolsContextProvider>
    </UserContextProvider>
  );
}

export default AppProvider;
