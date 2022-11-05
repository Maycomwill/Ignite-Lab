import { useContext } from "react";

import {SchoolsContext, SchoolsContextDataProps} from '../contexts/SchoolsContext'

export function useSchool(): SchoolsContextDataProps {

  const context = useContext(SchoolsContext);
  
  return context;
}