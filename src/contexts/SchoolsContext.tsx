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

interface SchoolsProps {
  schoolName: string;
  userId: string;
  address: string;
  schoolId: string | undefined;
}

export interface SchoolsContextDataProps {
  user: any;
  schoolData: SchoolsProps[];
  handleWithSchoolDataFromDb: (userId: string | undefined) => void;
}

interface SchoolsProviderProps {
  children: ReactNode;
}

export const SchoolsContext = createContext({} as SchoolsContextDataProps);

export function SchoolsContextProvider({ children }: SchoolsProviderProps) {
  const [user, loading, error] = useAuthState(auth);
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
          schoolId: doc.data().schoolId
        },
      ]);
    });
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
        schoolData,
        handleWithSchoolDataFromDb,
      }}
    >
      {children}
    </SchoolsContext.Provider>
  );
}
