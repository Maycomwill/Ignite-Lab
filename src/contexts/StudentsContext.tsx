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
import { auth, db } from "../services/firebaseConfig";

interface StudentsProps {
  studentName: string;
  studentAge: string;
  studentId: string;
  classId: string;
  userId: string;
  notes: string;
}

export interface StudentsContextDataProps {
  studentsData: StudentsProps[];
  loading: boolean;
  handleWithStudentsDataFromDb: (classId: string) => void;
  handleDeleteStudentFromDB: (studentId: string) => void;
}

interface StudentsProviderProps {
  children: ReactNode;
}

export const StudentsContext = createContext({} as StudentsContextDataProps);

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [studentsData, setStudentsData] = useState<StudentsProps[]>([]);

  async function handleWithStudentsDataFromDb(classId: string) {
    setLoading(true);
    setStudentsData([]);
    const docCollectionRef = collection(db, "students");
    const q = query(docCollectionRef, where("classId", "==", `${classId}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setStudentsData((prev) => [
        ...prev,
        {
          studentName: doc.data().studentName,
          studentAge: doc.data().studentAge,
          studentId: doc.data().studentId,
          classId: doc.data().classId,
          userId: doc.data().userId,
          notes: doc.data().notes
        },
      ]);
    });
    setLoading(false);
  }

  async function handleDeleteStudentFromDB(studentId: any) {
    const studentDelete = await deleteDoc(doc(db, "students", studentId));
    history.back();
    alert("Aluno(a) excluido(a)");
  }

  return (
    <StudentsContext.Provider
      value={{
        studentsData,
        loading,
        handleWithStudentsDataFromDb,
        handleDeleteStudentFromDB
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}
