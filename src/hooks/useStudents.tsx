import { useContext } from "react";

import {StudentsContext, StudentsContextDataProps} from '../contexts/StudentsContext'

export function useStudents(): StudentsContextDataProps {

  const context = useContext(StudentsContext);
  
  return context;
}