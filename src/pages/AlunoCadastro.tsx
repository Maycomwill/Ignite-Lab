import { getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  BookBookmark,
  Buildings,
  Hash,
  MapPin,
} from "phosphor-react";
import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { db } from "../services/firebaseConfig";

interface AlunoCadastroProps extends ReactElement {}

export function AlunoCadastro(): AlunoCadastroProps {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const docCollectionRef = collection(db, "students");

  async function handleSchoolRegister(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    alert("Aluno cadastrado");
    const studentRegister = await addDoc(docCollectionRef, {
      studentName: studentName,
      studentAge: studentAge,
      createdAt: serverTimestamp(),
      userId: auth.currentUser?.uid,
      turmaId: docCollectionRef.id
    });
    console.log(studentRegister);
    navigate("/");
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center mt-4">
      <header className="text-center">
        <Heading size="lg" className="text-gray-100">
          Preencha os campos e cadastre um aluno(a)
        </Heading>
      </header>
      <form
        onSubmit={handleSchoolRegister}
        className="flex flex-col gap-4 mt-4 w-full max-w-sm"
      >
        <label htmlFor="student-name" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Nome do(a) aluno(a) </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <BookBookmark />
            </TextInput.Icon>
            <TextInput.Input
              required
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              autoComplete="false"
              id="student-name"
              placeholder="Digite o nome do(a) aluno(a)"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="studentAge" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Data de nascimento</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Buildings />
            </TextInput.Icon>
            <TextInput.Input
              required
              onChange={(e) => setStudentAge(e.target.value)}
              type="date"
              autoComplete="false"
              id="studentAge"
              placeholder="Selecione a data de nascimento"
            />
          </TextInput.Root>
        </label>
        <Button type="submit">Cadastrar aluno</Button>
      </form>
    </div>
  );
}
