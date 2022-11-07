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
import { useParams } from "react-router-dom";
import { auth, db } from "../services/firebaseConfig";

interface ClassesProps {
  className: string;
  schoolId?: string;
  ammount_of_students: number;
  classId?: string
}

export interface ClassesContextDataProps {
  classData: ClassesProps[];
  loading: boolean;
  handleWithClassesDataFromDb: (schoolId: ClassesProps) => void;
}

interface ClassesProviderProps {
  children: ReactNode;
}

export const ClassesContext = createContext({} as ClassesContextDataProps);

export function ClassesContextProvider({ children }: ClassesProviderProps) {
  
  const [user, loading, error] = useAuthState(auth);
  const [classData, setClassData] = useState<ClassesProps[]>([]);

  async function handleWithClassesDataFromDb(userId: ClassesProps) {
    const docCollectionRef = collection(db, "schools");
    const q = query(docCollectionRef, where("userId", "==", `${userId}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setClassData((prev) => [
        ...prev,
        {
          className: doc.data().className,
          schoolId: doc.data().schoolId,
          ammount_of_students: doc.data().ammount_of_students,
        },
      ]);
    });
  }

  useEffect(() => {
    if (user) {
      setClassData([]);
      handleWithClassesDataFromDb;
    } else {
    }
  }, [user]);

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
