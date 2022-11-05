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

interface SchoolsProps {
  schoolName: string;
  userId: string;
  address: string;
}

export interface SchoolsContextDataProps {
  user: any;
  schoolData: SchoolsProps[];
  handleWithSchoolDataFromDb: () => void;
}

interface SchoolsProviderProps {
  children: ReactNode;
}

export const SchoolsContext = createContext({} as SchoolsContextDataProps);

export function SchoolsContextProvider({ children }: SchoolsProviderProps) {
  const [user, loading, error] = useAuthState(auth);
  const [schoolData, setSchoolData] = useState<SchoolsProps[]>([]);

  async function handleWithSchoolDataFromDb() {
    const docCollectionRef = collection(db, "schools");
    const q = query(docCollectionRef, where("userId", "==", `${user?.uid}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setSchoolData((prev) => [
        ...prev,
        {
          schoolName: doc.data().schoolName,
          userId: doc.data().userId,
          address: doc.data().address,
        },
      ]);
    });
  }

  useEffect(() => {
    if (user) {
      setSchoolData([]);
      console.log(schoolData);
      handleWithSchoolDataFromDb();
    } else {
    }
  }, [user]);

  return (
    <SchoolsContext.Provider
      value={{
        user,
        schoolData,
        handleWithSchoolDataFromDb,
      }}
    >
      {children}
    </SchoolsContext.Provider>
  );
}
