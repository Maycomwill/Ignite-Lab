import { Books } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getAlunos, getEscola, getTurmas } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";
import { AlunoCard } from "../components/AlunoCard";

export function Turma() {
  const navigate = useNavigate();
  const params = useParams();
  const turma = getTurmas(parseInt(params.escolaId, 10));
  const alunos = getAlunos(parseInt(params.turmaId, 10));

  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className="w-full bg-gray-900 flex flex-col items-start justify-start gap-4 py-2">
        <div id="alunos-data" className="flex items-center">
          <div>
            <ul role={"list"} className="flex gap-2 list-none">
              {alunos.map((aluno) => {
                return (
                  <li>
                    <AlunoCard.Root>
                      <AlunoCard.Icon>
                        <Books />
                      </AlunoCard.Icon>
                      <AlunoCard.Content
                        alunoId={aluno.alunoId}
                        key={aluno.alunoId}
                        nome={aluno.nome}
                        turma={aluno.turma}
                        turno={aluno.turno}
                      />
                    </AlunoCard.Root>
                  </li>
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
