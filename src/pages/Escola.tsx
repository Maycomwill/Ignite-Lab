import { Books } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { TurmaCard } from "../components/TurmaCard";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getEscola, getTurmas } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";

export function Escola() {
  const navigate = useNavigate();
  const params = useParams();
  const escola = getEscola(parseInt(params.escolaId, 10));
  const turma = getTurmas(parseInt(params.escolaId, 10));

  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className=" bg-gray-900 px-4 flex flex-col items-start justify-start gap-4">
        <div className="flex flex-col gap-2 items-start">
          <Heading size="lg">{escola?.name}</Heading>
        </div>
        <div id="alunos-data" className="flex items-center">
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
