import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";

interface ClassesProps {
  className: string;
  schoolId: string;
  classId: string
}

export interface ClassesContextDataProps {
  classData: ClassesProps[];
  loading: boolean;
  handleWithClassesDataFromDb: (schoolId: string) => void;
}

interface ClassesProviderProps {
  children: ReactNode;
}

export const ClassesContext = createContext({} as ClassesContextDataProps);

export function ClassesContextProvider({ children }: ClassesProviderProps) {
  
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false)
  const [classData, setClassData] = useState<ClassesProps[]>([]);

  async function handleWithClassesDataFromDb(schoolId: string) {
    setLoading(true)
    setClassData([]);
    const docCollectionRef = collection(db, "classes");
    const q = query(docCollectionRef, where("schoolId", "==", `${schoolId}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setClassData((prev) => [
        ...prev,
        {
          className: doc.data().className,
          schoolId: doc.data().schoolId,
          classId: doc.data().classId
        },
      ]);
    });
    setLoading(false)
  }

  return (
    <ClassesContext.Provider
      value={{
        classData,
        loading,
        handleWithClassesDataFromDb,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
}
