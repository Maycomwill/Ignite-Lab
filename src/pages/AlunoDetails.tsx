import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { useStudents } from "../hooks/useStudents";
import { useUser } from "../hooks/useUser";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import MainFooter from "../components/MainFooter";

export function AlunoDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { userData } = useUser();
  const { handleWithStudentsDataFromDb, studentsData } = useStudents();

  const studentInfo = studentsData.find(
    (id) => id.studentId === `${params.alunoid}`
  );

  if (userData?.userId === studentInfo?.userId) {
    const birthDay = dayjs(studentInfo?.studentAge)
      .locale(ptBR)
      .format("DD [de] MMMM [de] YYYY");
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-[50%] flex flex-col gap-4">
          <div className="bg-purple-500 w-full h-full flex flex-col">
            <Text>Nome: {studentInfo?.studentName}</Text>
            <Text>Turma: {studentInfo?.classId}</Text>
            <Text size="xlg">{birthDay}</Text>
            <Text size="xlg">{studentInfo?.studentId}</Text>
          </div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </Button>
        </div>
        <div className="p-4 w-full">
          <MainFooter />
        </div>
      </div>
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
