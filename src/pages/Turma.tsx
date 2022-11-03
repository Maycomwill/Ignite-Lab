import { Pencil, User } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getAlunos, getEscola, getTurmas } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";
import { TabelaDeAlunos } from "../components/TabelaDeAlunos";

export function Turma() {
  const navigate = useNavigate();
  const params = useParams();
  const turma = getTurmas(parseInt(`${params.escolaId}`, 10));
  const alunos = getAlunos(parseInt(`${params.turmaId}`, 10));

  const [user, loading, error] = useAuthState(auth);

  if (error) {
    console.log(error.message);
  }

  if (!user) {
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-4">
      <Text size="lg">Por favor, faça login!</Text>
      <Link to="/">
        <Button>Faça login</Button>
      </Link>
    </div>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full bg-gray-900 flex flex-col items-start justify-start gap-4 py-2">
      <div id="alunos-data" className="w-[70%] bg-gray-800">
        {!alunos ? (
          <div>
            <Text size="md" weight="bold">
              Você ainda não tem alunos cadastrados nessa turma
            </Text>
          </div>
        ) : (
          <TabelaDeAlunos />
        )}
      </div>
    </div>
  );
}
