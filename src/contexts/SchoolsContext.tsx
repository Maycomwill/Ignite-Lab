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
import { auth, db } from "../services/firebaseConfig";

interface SchoolsProps {
  schoolName: string;
  userId: string;
  address: string;
}

export interface SchoolsContextDataProps {
  schoolData: SchoolsProps;
  handleWithSchoolDataFromDb: () => void;
}

interface SchoolsProviderProps {
  children: ReactNode;
}

export const SchoolsContext = createContext({} as SchoolsContextDataProps);

export function SchoolsContextProvider({ children }: SchoolsProviderProps) {
  const [schoolData, setSchoolData] = useState<SchoolsProps>({} as SchoolsProps);

  async function handleWithSchoolDataFromDb() {
    const docCollectionRef = collection(db, "schools");
    const q = query(
      docCollectionRef,
      where("userId", "==", `${auth.currentUser?.uid}`)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const result = doc.data() as SchoolsProps;
      setSchoolData({
        schoolName: result.schoolName,
        userId: result.userId,
        address: result.address
      });
    });
  }

    useEffect(() => {
      handleWithSchoolDataFromDb();
    }, []);

  return (
    <SchoolsContext.Provider
      value={{
        schoolData,
        handleWithSchoolDataFromDb,
      }}
    >
      {children}
    </SchoolsContext.Provider>
  );
}

