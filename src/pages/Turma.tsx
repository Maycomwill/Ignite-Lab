import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { auth } from "../services/firebaseConfig";
import { TabelaDeAlunos } from "../components/TabelaDeAlunos";
import { Header } from "../components/Header";
import MainFooter from "../components/MainFooter";
import { useUser } from "../hooks/useUser";
import { useClass } from "../hooks/useClasses";
import { Heading } from "../components/Heading";
import { MakeLogin } from "../components/MakeLogin";
import { useEffect } from "react";

export function Turma() {
  const navigate = useNavigate();
  const { classData, handleDeleteClassFromDB } = useClass();
  const params = useParams();
  const { userData, handleWithUserDataFromDb } = useUser();

  const [user, loading, error] = useAuthState(auth);

  const classInfo = classData.find((id) => id.classId === `${params.turmaid}`);

  if (user) {
    if (loading) {
      <Loading />;
    }
    if (error) {
      console.log(error.message);
    }
    if (classInfo?.userId === userData?.userId) {
      return (
        <>
          <Header />
          <div className="w-full bg-gray-900 flex flex-col items-start justify-start gap-4 p-4">
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
                  <Button
                    size="sm"
                    onClick={() => navigate("cadastro-de-aluno")}
                  >
                    Cadastrar aluno
                  </Button>
                </div>
                <div>
                  <Button
                    version="SECONDARY"
                    size="sm"
                    onClick={() => handleDeleteClassFromDB(params.turmaid)}
                  >
                    Excluir turma
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <MainFooter />
        </>
      );
    }
  }
  return <MakeLogin />;
}
