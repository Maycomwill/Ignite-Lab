import { useContext } from "react";

import { UserContext, UserContextDataProps } from "../contexts/UserContext";

export function useUser(): UserContextDataProps {
  const context = useContext(UserContext);

  return context;
}
