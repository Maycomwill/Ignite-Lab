import { Books } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { TurmaCard } from "../components/TurmaCard";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getTurmas } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";
import { useClass } from "../hooks/useClasses";
import { useSchool } from "../hooks/useSchools";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import { Header } from "../components/Header";
import MainFooter from "../components/MainFooter";

export function Escola() {
  const { userData } = useUser();
  const { schoolData } = useSchool();
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

  if (userData?.userId) {
    if(!loading){
      return (
        <>
          <Header />
          <div className="p-4 bg-gray-900 flex flex-col items-start justify-start gap-4">
            <div className="flex items-center w-full justify-between">
              <Heading>Escola: {schoolInfo?.schoolName}</Heading>
              <div className="flex gap-4 justify-end px-2 w-[30%]">
                <div>
                  <Button size="sm" onClick={() => navigate("cadastro-de-turma")}>
                    Cadastrar turma
                  </Button>
                </div>
                <div>
                  <Button size="sm" onClick={() => navigate("/")}>
                    Voltar
                  </Button>
                </div>
              </div>
            </div>
            <div id="turma-data" className="flex items-center">
              <div>
                <ul role={"grid"} className="grid grid-flow-row grid-cols-3 gap-4">
                  {classData.map((turma) => {
                    return (
                      <li key={turma.classId}>
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
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
              <div className="pt-4 w-full flex items-center justify-center">
                <div>
                <Button size="sm">
                  Excluir escola
                </Button>
                </div>
              </div>
              <MainFooter />
          </div>
        </>
      );
    }
  }
  if (loading) {
    return <Loading />;
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
