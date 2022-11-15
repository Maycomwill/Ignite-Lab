import { ReactNode } from "react";

import { UserContextProvider } from "../contexts/UserContext";
import { SchoolsContextProvider } from "../contexts/SchoolsContext";
import { ClassesContextProvider } from "../contexts/ClassesContext";
import { StudentsContextProvider } from "../contexts/StudentsContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UserContextProvider>
      <SchoolsContextProvider>
        <ClassesContextProvider>
          <StudentsContextProvider>
            {children}
          </StudentsContextProvider>
        </ClassesContextProvider>
      </SchoolsContextProvider>
    </UserContextProvider>
  );
}

export default AppProvider;
