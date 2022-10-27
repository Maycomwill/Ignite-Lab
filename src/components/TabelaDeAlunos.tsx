import { useNavigate, useParams } from "react-router-dom";
import { getAlunos } from "../services/fetchData";
import { Button } from "./Button";

export function TabelaDeAlunos() {
  const params = useParams();
  const alunos = getAlunos(parseInt(params.turmaId, 10));
  const navigate = useNavigate();

  return (
    <div>
      <table className="border-collapse rounded text-center w-full text-gray-100">
        <thead>
          <tr className="">
            <th className="px-4 py-1 border border-gray-100">Nome</th>
            <th className="px-4 py-1 border border-gray-100">Id</th>
            <th className="px-4 py-1 border border-gray-100">Escola Id</th>
            <th className="px-4 py-1 border border-gray-100">Editar</th>
            <th className="px-4 py-1 border border-gray-100">Excluir</th>
          </tr>
        </thead>
        {alunos.map((aluno) => {
          return (
            <tbody className="">
              <tr>
                <td className="px-4 py-1 border border-gray-100">
                  {aluno.nome}
                </td>
                <td className="px-4 py-1 border border-gray-100">
                  {aluno.alunoId}
                </td>
                <td className="px-4 py-1 border border-gray-100">
                  {aluno.escolaId}
                </td>
                <td className="px-4 py-1 border border-gray-100">
                  <Button onClick={() => navigate(`/${aluno.alunoId}`)}>
                    Editar
                  </Button>
                </td>
                <td className="px-4 py-1 border border-gray-100">
                  <Button>Excluir</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
