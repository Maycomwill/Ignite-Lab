import { User } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AlunoCard } from "../components/AlunoCard";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getAlunos, getEscola } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";

export function Escola() {
  const navigate = useNavigate();
  const params = useParams();
  const escola = getEscola(parseInt(params.escolaId, 10));
  const alunos = getAlunos(parseInt(params.escolaId, 10));

  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className="w-screen h-screen bg-gray-900 flex flex-col items-start justify-start gap-4 py-4">
        <Header />
        <div className="flex w-full h-screen">
          <div className="w-[20%] max-w-[35%] h-screen py-4" id="escola-dados">
            <Heading>{escola?.name}</Heading>
            <Text>{escola?.location}</Text>
            <div className="mt-12 flex items-start justify-start">
              <Button size="sm" onClick={() => navigate("/")}>
                Voltar
              </Button>
            </div>
          </div>
          <div id="alunos-data" className="px-4 flex items-center h-full">
            <div>
              <ul
                role={"list"}
                className="px-4 flex gap-2 list-none max-h-[80%]"
              >
                {alunos.map((aluno) => {
                  return (
                    <li>
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
                })}
              </ul>
            </div>
          </div>
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
