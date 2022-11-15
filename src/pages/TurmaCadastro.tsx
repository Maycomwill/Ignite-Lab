import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { BookBookmark, Buildings, Hash, MapPin } from "phosphor-react";
import { FormEvent, ReactElement, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { TurmaSelect } from "../components/TurmaSelect";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { db } from "../services/firebaseConfig";
import { Header } from "../components/Header";

interface TurmaCadastroProps extends ReactElement {}

export function TurmaCadastro(): TurmaCadastroProps {
  const params = useParams();
  const [className, setClassName] = useState("");
  const [loading, setLoading] = useState(false);
  const [classId, setClassId] = useState("");

  const navigate = useNavigate();
  const schoolId = `${params.escolaid}`;
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const docCollectionRef = collection(db, "classes");

  async function handleClassRegister(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const classRegister = await addDoc(docCollectionRef, {
      className,
      createdAt: serverTimestamp(),
      schoolId,
      userId
    });
    setClassId(classRegister.id);
  }

  useEffect(() => {
    if (classId !== null) {
      addingClassIdToTheDocumentCreated();
    }
  }, [classId]);

  async function addingClassIdToTheDocumentCreated() {
    const docRef = doc(db, "classes", `${classId}`);
    const classIdUpdate = await updateDoc(docRef, {
      classId: `${classId}`,
    });
    console.log(classIdUpdate);
    alert("Turma cadastrada");
    navigate("/");
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-screen flex flex-col items-center justify-center mt-4">
        <header className="text-center">
          <Heading size="lg" className="text-gray-100">
            Preencha os campos e cadastre uma turma
          </Heading>
        </header>
        <form
          onSubmit={handleClassRegister}
          className="w-full flex flex-col gap-4 mt-4 max-w-sm"
        >
          <label htmlFor="student-name" className="flex flex-col gap-3">
            <Text className="text-sm font-semibold">Nome da turma</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <BookBookmark />
              </TextInput.Icon>
              <TextInput.Input
                required
                onChange={(e) => setClassName(e.target.value)}
                value={className}
                type="text"
                autoComplete="false"
                id="student-name"
                placeholder="Digite o nome da turma"
              />
            </TextInput.Root>
          </label>
          <Button type="submit">Cadastrar turma </Button>
        </form>
      </div>
    </>
  );
}
