import { Pencil } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlunos } from "../services/fetchData";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function TabelaDeAlunos() {
  const params = useParams();
  const alunos = getAlunos(parseInt(`${params.turmaId}`, 10));
  const navigate = useNavigate();

  return (
    <div>
      <table className="border-collapse rounded text-center w-full text-gray-100">
        <thead>
          <tr>
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
                <td className="px-4 py-1 border border-gray-100 text-xsm">
                  {aluno.nome}
                </td>
                <td className="px-4 py-1 border border-gray-100 text-xsm">
                  {aluno.alunoId}
                </td>
                <td className="px-4 py-1 border border-gray-100 text-xsm">
                  {aluno.escolaId}
                </td>
                <td className="px-4 py-1 border border-gray-100 text-xsm">
                  <Button onClick={() => navigate(`/${aluno.alunoId}`)} size="xsm">
                    <Icon>
                      <Pencil />
                    </Icon>
                  </Button>
                </td>
                <td className="px-4 py-1 border border-gray-100">
                  <Button size="xsm" textSize="sm">Excluir</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
