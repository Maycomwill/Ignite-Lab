import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { useStudents } from "../hooks/useStudents";
import { useUser } from "../hooks/useUser";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import MainFooter from "../components/MainFooter";
import { Header } from "../components/Header";
import { useClass } from "../hooks/useClasses";
import { useSchool } from "../hooks/useSchools";
import { Value } from "@radix-ui/react-select";
import { TextInput } from "../components/TextInput";

export function AlunoDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { userData } = useUser();
  const { handleWithStudentsDataFromDb, studentsData } = useStudents();
  const { classData } = useClass();
  const { schoolData } = useSchool();
  const [studentsNotes, setStudentsNotes] = useState<string | undefined>("");

  const studentInfo = studentsData.find(
    (id) => id.studentId === `${params.alunoid}`
  );

  const classInfo = classData.find((id) => id.classId === `${params.turmaid}`);

  const schoolInfo = schoolData.find(
    (id) => id.schoolId === `${params.escolaid}`
  );

  useEffect(() => {
    if (studentInfo?.notes === "") {
      setStudentsNotes(
        "Esse aluno ainda não possui nenhuma anotação registrada"
      );
    } else {
      setStudentsNotes(studentInfo?.notes);
    }
  }, []);

  if (userData?.userId === studentInfo?.userId) {
    const birthDay = dayjs(studentInfo?.studentAge)
      .locale(ptBR)
      .format("DD [de] MMMM [de] YYYY");

    return (
      <>
        <Header />
        <div className="flex flex-col justify-center p-4 gap-2">
          <div className="border-b-2 pb-2 border-green-500">
            <div className="w-full flex items-center justify-between">
              <Text size="lg">Nome: {studentInfo?.studentName}</Text>
              <div>
                <Button
                  size="sm"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Voltar
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-[50%]">
              <div className="flex gap-1">
                <Text>Escola:</Text>
                <Text>{schoolInfo?.schoolName}</Text>
              </div>
              <div className="flex gap-1">
                <Text>Turma:</Text>
                <Text className="capitalize">{classInfo?.className}</Text>
              </div>
              <div className="flex gap-1">
                <Text>Aniversário:</Text>
                <Text>{birthDay}</Text>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col gap-1">
                  <Text>Observações:</Text>
                  <div className="bg-gray-800 rounded">
                    <p className="break-words indent-4 py-2 text-gray-100">
                      {studentsNotes}
                    </p>
                  </div>
                </div>
                <div className="w-[15%] m-auto">
                  <Button size="sm">Editar</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Button size="sm">Salvar</Button>
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          <MainFooter />
        </div>
      </>
    );
  }

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-4">
      <Text size="lg">Você não tem autorização para acessar essa página</Text>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
