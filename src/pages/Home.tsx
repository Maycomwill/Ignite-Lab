import { useNavigate } from "react-router-dom";
import { EscolaCard } from "../components/EscolaCard";
import { Text } from "../components/Text";
import { escolaData } from "../services/fetchData";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-4">
      <Text size="lg">Suas Turmas:</Text>
      <div className="flex gap-4">
        <ul className="flex flex-col gap-2 list-none">
          {escolaData.map((escola) => {
            return (
              <li>
                <EscolaCard
                  key={escola.id}
                  onClick={() => {
                    navigate(`escolas/${escola.id}`);
                  }}
                  escolaName={escola.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
