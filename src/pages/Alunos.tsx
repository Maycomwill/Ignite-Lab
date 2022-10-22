import { User } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AlunoCard } from "../components/AlunoCard";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getAlunos } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";

export function Alunos() {
  const navigate = useNavigate();
  const params = useParams();
  const alunos = getAlunos(parseInt(params.escolaId, 10));

  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return ( 
          <div id="alunos-data" className="px-4 flex items-center h-full w-screen bg-purple-500">
            <div>
              <ul
                role={"list"}
                className="px-4 flex gap-2 list-none max-h-[80%]"
              >
                {alunos ? alunos.map((aluno) => {
                  return (
                    <li key={aluno.alunoId}>
                      <AlunoCard.Root>
                        <AlunoCard.Icon>
                          <User weight={"bold"} />
                        </AlunoCard.Icon>
                        <AlunoCard.Content
                          nome={aluno.nome}
                          turma={aluno.turma}
                          turno={aluno.turno}
                        />
                      </AlunoCard.Root>
                    </li>
                  );
                }) : <Text>Não há alunos cadastrados</Text>}
              </ul>
            </div>
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
