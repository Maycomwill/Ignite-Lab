import { useContext } from "react";

import {ClassesContext, ClassesContextDataProps} from '../contexts/ClassesContext'

export function useClass(): ClassesContextDataProps {

  const context = useContext(ClassesContext);
  
  return context;
}