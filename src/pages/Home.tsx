import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { EscolaCard } from "../components/EscolaCard";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { escolaData } from "../services/fetchData";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex flex-1 justify-between pb-4">
          <Text size="lg">Escolas cadastradas:</Text>
          <div>
          <Button size="sm">Cadastrar escola</Button>
          </div>
          </div>
          <div className="flex gap-4">
            <ul className="flex gap-2 list-none">
              {escolaData.map((escola) => {
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
              })}
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
