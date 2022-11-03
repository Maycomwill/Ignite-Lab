import { useContext } from "react";

import {UserContext, UserContextDataProps} from '../contexts/UserContext'

export function useUserContext(): UserContextDataProps {

  const context = useContext(UserContext);
  
  return context;
}