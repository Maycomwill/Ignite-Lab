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

export function Escola() {
  const { userData } = useUser();
  const { schoolData, handleWithSchoolDataFromDb } = useSchool();
  const { classData, loading } = useClass();

  const navigate = useNavigate();
  const params = useParams();
  const turma = getTurmas(parseInt(`${params.escolaId}`, 10));

  if (userData?.userId) {
    return (
      <div className=" bg-gray-900 flex flex-col items-start justify-start gap-4">
        <div className="flex gap-2 items-center w-full justify-between">
          <Heading>a</Heading>
          <div>
            <Button size="sm" onClick={() => navigate('/escolas/turmas/cadastro')}>Cadastrar turma</Button>
          </div>
        </div>
        <div id="turma-data" className="flex items-center">
          <div>
            <ul role={"list"} className="flex gap-2 list-none max-h-[80%]">
              {turma.map((turma) => {
                return (
                  <>
                    <li key={turma.turmaId}>
                      <TurmaCard.Root>
                        <TurmaCard.Icon>
                          <Books />
                        </TurmaCard.Icon>
                        <TurmaCard.Content
                          nome={turma.nome}
                          turmaId={turma.turmaId}
                          escolaId={turma.escolaId}
                        />
                      </TurmaCard.Root>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    );
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
