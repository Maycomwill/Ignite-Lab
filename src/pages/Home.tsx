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
  const { schoolData } = useSchool();
  const navigate = useNavigate();

  function handleCadastroScreen() {
    navigate("/cadastro");
  }

  if (schoolData) {
    return (
      <>
        <Header />
        <div className="w-full flex flex-col gap-2 p-4 justify-between">
          <div className="flex flex-col">
            <div className="flex justify-between pb-4">
              <Text size="lg">Escolas cadastradas:</Text>
              <div>
                <Button onClick={handleCadastroScreen} size="sm">
                  Cadastrar escola
                </Button>
              </div>
            </div>
              {schoolData.length == 0 ? (
                <div className="w-full px-4 py-3 bg-gray-800 text-center rounded">
                  <Text size="lg" weight="bold">Você ainda não possui escolas cadastradas!</Text>
                </div>
              ) : (
                <div className="
                mx-4
                grid
                pb-8
                gap-4 
                grid-cols-layout
                grid-flow-col 
                auto-cols-max 
                overflow-scroll  
                snap-mandatory 
                scrollbar
                scrollbar-thumb-gray-700
                scrollbar-track-gray-800
                hover:scrollbar-thumb-gray-500
                scrollbar-track-rounded-md
                scrollbar-thumb-rounded-md">
                {schoolData ? (
                  schoolData.map((escola) => {
                    return (
                        <EscolaCard
                          className="flex flex-shrink-0 snap-start"
                          key={escola.schoolId}
                          onClick={() => {
                            navigate(`/${escola.schoolId}`);
                          }}
                          escolaName={escola.schoolName}
                        />
                    );
                  })
                ) : (
                  <Text size="md" weight="bold">
                    Você ainda não tem escolas cadastradas
                  </Text>
                )}
              </div>
              )}
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
