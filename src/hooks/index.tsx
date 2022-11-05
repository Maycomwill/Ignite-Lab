import React, { ReactNode, ReactPortal } from "react";

import { UserContextProvider } from "../contexts/UserContext";
import { SchoolsContextProvider } from "../contexts/SchoolsContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps) {
  return (
    <UserContextProvider>
      <SchoolsContextProvider>
        {children}
      </SchoolsContextProvider>
    </UserContextProvider>
  );
}

export default AppProvider;
