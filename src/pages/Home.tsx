import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { EscolaCard } from "../components/EscolaCard";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import MainFooter from "../components/MainFooter";
import { Text } from "../components/Text";
import { useSchool } from "../hooks/useSchools";
import { useUser } from "../hooks/useUser";

export function Home() {
  const { userData } = useUser();
  const { schoolData } = useSchool();
  const navigate = useNavigate();

  function handleCadastroScreen() {
    navigate("/escolas/cadastro");
  }

  if (schoolData) {
    return (
      <>
        <Header />
        <div className="w-full flex flex-col gap-4 p-4">
          <div className="flex flex-col">
            <div className="flex flex-1 justify-between pb-4">
              <Text size="lg">Escolas cadastradas:</Text>
              <div>
                <Button onClick={handleCadastroScreen} size="sm">
                  Cadastrar escola
                </Button>
              </div>
            </div>
            <div className="w-[80%] py-3 flex gap-4">
              <ul className="flex flex-wrap gap-2 list-none">
                {schoolData ? (
                  schoolData.map((escola) => {
                    return (
                      <li key={escola.schoolId}>
                        <EscolaCard
                          onClick={() => {
                            navigate(`/escolas/${escola.schoolId}`);
                          }}
                          escolaName={escola.schoolName}
                        />
                      </li>
                    );
                  })
                ) : (
                  <Text size="md" weight="bold">
                    Você ainda não tem escolas cadastradas
                  </Text>
                )}
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
        <MainFooter />
      </>
    );
  } else {
    return <Loading />;
  }
}
