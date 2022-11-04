import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { EscolaCard } from "../components/EscolaCard";
import { Header } from "../components/Header";
import MainFooter from "../components/MainFooter";
import { Text } from "../components/Text";
import { escolaData, getSchools } from "../services/fetchData";

export function Home() {
  const navigate = useNavigate();


  function handleCadastroScreen() {
    navigate("/escolas/cadastro");
  }
  
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
              {escolaData ? (
                escolaData.map((escola: any) => {
                  return (
                    <li key={escola.id}>
                      <EscolaCard
                        onClick={() => {
                          navigate(`/escolas/${escola.id}`);
                        }}
                        escolaName={escola.name}
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
        </div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}
