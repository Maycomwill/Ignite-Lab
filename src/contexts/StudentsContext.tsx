import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
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
  uniqueStudent: StudentsProps | undefined;
  handleUpdateNotesFromStudent: (studentId: string, noteToUpdate: string) => void;
  handleWithStudentsDataFromDb: (classId: string) => void;
  handleDeleteStudentFromDB: (studentId: string) => void;
  handleWithUniqueStudentData: (studentId: string) => void;
}

interface StudentsProviderProps {
  children: ReactNode;
}

export const StudentsContext = createContext({} as StudentsContextDataProps);

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [uniqueStudent, setUniqueStudent] = useState<StudentsProps>()
  const [studentsData, setStudentsData] = useState<StudentsProps[]>([]);

 function handleWithUniqueStudentData(studentId: string) {
    setUniqueStudent(studentsData.find(
      (aluno) => aluno.studentId === studentId
    ))
  }
  
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

  async function handleUpdateNotesFromStudent(studentId: string, noteToUpdate: string) {
    setLoading(true)
    const docRef = doc(db, "students", `${studentId}`)
    const studentIdUpdate = await updateDoc(docRef, {
      notes: `${noteToUpdate}`,
    });
    alert("Anotação atualizada");

    history.go(-2);
    setLoading(false)
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
        uniqueStudent,
        handleWithStudentsDataFromDb,
        handleDeleteStudentFromDB,
        handleUpdateNotesFromStudent,
        handleWithUniqueStudentData
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}
