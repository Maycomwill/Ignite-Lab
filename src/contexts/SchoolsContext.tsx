import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebaseConfig";

interface SchoolsProps {
  schoolName: string;
  userId: string;
  address: string;
  schoolId: string | undefined;
}

export interface SchoolsContextDataProps {
  user: any;
  schoolData: SchoolsProps[];
  isLoading: boolean;
  handleWithSchoolDataFromDb: (userId: string | undefined) => void;
  handleDeleteSchoolFromDB: (schoolId: any) => void;
}

interface SchoolsProviderProps {
  children: ReactNode;
}

export const SchoolsContext = createContext({} as SchoolsContextDataProps);

export function SchoolsContextProvider({ children }: SchoolsProviderProps) {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [schoolData, setSchoolData] = useState<SchoolsProps[]>([]);

  async function handleWithSchoolDataFromDb(userId: string | undefined) {
    const docCollectionRef = collection(db, "schools");
    const q = query(docCollectionRef, where("userId", "==", `${userId}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setSchoolData((prev) => [
        ...prev,
        {
          schoolName: doc.data().schoolName,
          userId: doc.data().userId,
          address: doc.data().address,
          schoolId: doc.data().schoolId,
        },
      ]);
    });
  }

  async function handleDeleteSchoolFromDB(schoolId: any) {
    setIsLoading(true);
    const schoolDelete = await deleteDoc(doc(db, "schools", schoolId));
    console.log("Excluindo escola", schoolId);
    alert("Escola excluida");
    location.reload()
    setIsLoading(false);
  }

  useEffect(() => {
    if (user) {
      setSchoolData([]);
      handleWithSchoolDataFromDb(user?.uid);
    } else {
    }
  }, [user]);

  return (
    <SchoolsContext.Provider
      value={{
        user,
        isLoading,
        schoolData,
        handleWithSchoolDataFromDb,
        handleDeleteSchoolFromDB,
      }}
    >
      {children}
    </SchoolsContext.Provider>
  );
}
