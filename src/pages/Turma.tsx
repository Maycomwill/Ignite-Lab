import { Pencil, User } from "phosphor-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { getAlunos, getEscola, getTurmas } from "../services/fetchData";
import { auth } from "../services/firebaseConfig";
import { TabelaDeAlunos } from "../components/TabelaDeAlunos";
import { Header } from "../components/Header";
import MainFooter from "../components/MainFooter";

export function Turma() {
  const navigate = useNavigate();
  const params = useParams();

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
    <>
      <Header />
      <div className="w-full bg-gray-900 flex flex-col items-start justify-start gap-4 py-2 px-4">
        <div id="alunos-data" className="w-full">
          <TabelaDeAlunos />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-4">
            <div>
              <Button size="sm" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            </div>
            <div>
              <Button size="sm" onClick={() => navigate("cadastro-de-aluno")}>
                Cadastrar aluno
              </Button>
            </div>
            <div>
              <Button size="sm">Excluir turma</Button>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
}
