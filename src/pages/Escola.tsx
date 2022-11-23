import { Books } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { TurmaCard } from "../components/TurmaCard";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { useClass } from "../hooks/useClasses";
import { useSchool } from "../hooks/useSchools";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import { Header } from "../components/Header";
import MainFooter from "../components/MainFooter";
import { MakeLogin } from "../components/MakeLogin";

export function Escola() {
  const { userData, user } = useUser();
  const { schoolData, handleDeleteSchoolFromDB, isLoading } = useSchool();
  const { classData, handleWithClassesDataFromDb, loading } = useClass();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (schoolData !== null) {
      handleWithClassesDataFromDb(`${params.escolaid}`);
    }
  }, []);

  const schoolInfo = schoolData.find(
    (id) => id.schoolId === `${params.escolaid}`
  );

  if (loading || isLoading) {
  }

  if (user) {
    if (userData?.userId === schoolInfo?.userId) {
      if (!loading || !isLoading) {
        return (
          <>
            <Header />
            <div className="w-full p-4 bg-gray-900 flex flex-col items-start justify-start gap-4">
              <div className="flex items-center w-full justify-between">
                <Text size="lg">Escola: {schoolInfo?.schoolName}</Text>
                <div className="flex gap-4 justify-end px-2 w-[30%]"></div>
              </div>
              {classData.length == 0 ? (
                <div className="w-full px-4 py-3 rounded bg-gray-800 text-center">
                  <Text size="lg" weight="bold">
                    Você não possui turmas cadastradas
                  </Text>
                </div>
              ) : (
                <div
                  className="
                  w-[100%]
                  mx-4
                  grid
                  pb-8
                  gap-4 
                  grid-flow-col 
                  grid-cols-layout
                  auto-cols-max 
                  overflow-auto  
                  snap-mandatory 
                  scrollbar
                  scrollbar-thumb-gray-700
                  scrollbar-track-gray-800
                  hover:scrollbar-thumb-gray-500
                  scrollbar-track-rounded-md
                  scrollbar-thumb-rounded-md"
                >
                  {classData.map((turma) => {
                    return (
                      <div key={turma.classId}>
                        <TurmaCard.Root>
                          <TurmaCard.Icon>
                            <Books />
                          </TurmaCard.Icon>
                          <TurmaCard.Content
                            nome={turma.className}
                            turmaid={turma.classId}
                            escolaid={turma.schoolId}
                          />
                        </TurmaCard.Root>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="pt-4 w-full flex items-center justify-center gap-4">
              <div>
                <Button size="sm" onClick={() => navigate("/")}>
                  Voltar
                </Button>
              </div>

              <div>
                <Button size="sm" onClick={() => navigate("cadastro-de-turma")}>
                  Cadastrar turma
                </Button>
              </div>
              <div>
                <Button
                  version="SECONDARY"
                  size="sm"
                  onClick={() => {
                    handleDeleteSchoolFromDB(params.escolaid);
                  }}
                >
                  Excluir escola
                </Button>
              </div>
            </div>
              <MainFooter />
          </>
        );
      } else {
        return <Loading />;
      }
    }
  }

  return <MakeLogin />;
}
