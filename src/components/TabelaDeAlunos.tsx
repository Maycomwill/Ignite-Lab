import { Pencil } from "phosphor-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useClass } from "../hooks/useClasses";
import { useStudents } from "../hooks/useStudents";
import { useUser } from "../hooks/useUser";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Icon } from "./Icon";
import { Loading } from "./Loading";
import { Text } from "./Text";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br"

export function TabelaDeAlunos() {
  const { userData } = useUser();
  const { classData } = useClass();
  const { loading, handleWithStudentsDataFromDb, studentsData, handleDeleteStudentFromDB } = useStudents();
  const params = useParams();
  const navigate = useNavigate();

  const classInfo = classData.find((id) => id.classId === `${params.turmaid}`);

  useEffect(() => {
    if (classData !== null) {
      handleWithStudentsDataFromDb(`${params.turmaid}`);
    }
  }, []);

  if (userData?.userId) {
    if (!loading) {
      if (studentsData.length !== 0) {
        return (
          <div>
            <div className="bg-gray-900 flex flex-col items-start justify-start gap-4">
              <div className="flex items-center w-full justify-between">
                <Text size="lg">Turma: {classInfo?.className}</Text>
                <div className="flex gap-4 justify-end px-2 w-[30%]"></div>
              </div>
              <table className="border-collapse text-center w-full bg-gray-800 text-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-1 border border-gray-100">Aluno</th>
                    <th className="px-4 py-1 border border-gray-100">
                      Data de nascimento
                    </th>
                    <th className="px-4 py-1 border border-gray-100">Id</th>
                    <th className="px-4 py-1 border border-gray-100">Editar</th>
                    <th className="px-4 py-1 border border-gray-100">
                      Excluir
                    </th>
                  </tr>
                </thead>
                {studentsData.map((aluno) => {
                  const birthDay = dayjs(aluno.studentAge).locale(ptBR).format("DD [de] MMMM [de] YYYY");
                  return (
                    <tbody key={aluno.studentId} className="text-gray-200">
                      <tr className="hover:bg-gray-900 transition-colors duration-150">
                        <td className="px-4 py-1 border border-gray-100 text-xsm">
                          {aluno.studentName}
                        </td>
                        <td className="px-4 py-1 border border-gray-100 text-xsm">
                          {birthDay}
                        </td>
                        <td className="px-4 py-1 border border-gray-100 text-xsm">
                          {aluno.studentId}
                        </td>
                        <td className="px-4 py-1 border border-gray-100 text-xsm">
                          <Button
                            onClick={() => navigate(`${aluno.studentId}`)}
                            size="xsm"
                          >
                            <Icon>
                              <Pencil />
                            </Icon>
                          </Button>
                        </td>
                        <td className="px-4 py-1 border border-gray-100">
                          <Button size="xsm" textSize="sm" onClick={() => handleDeleteStudentFromDB(aluno.studentId)}>
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        );
      } else {
        return (
          <div className="p-4 text-center rounded-lg bg-gray-800">
            <Text size="lg" weight="bold">
              Você ainda não tem alunos cadastrados nessa turma
            </Text>
          </div>
        );
      }
    } else {
      return <Loading />;
    }
  }

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-4">
      <Text size="lg">Por favor, faça login!</Text>
      <Link to="/">
        <Button>Faça login</Button>
      </Link>
    </div>
  );
}
