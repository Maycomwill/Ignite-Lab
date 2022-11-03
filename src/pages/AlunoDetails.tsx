import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlunoDetail } from "../services/fetchData";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

export function AlunoDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const aluno = getAlunoDetail(parseInt(`${params.alunoId}`, 10));

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-[50%] flex flex-col gap-4">
        <div className="bg-purple-500 w-full h-full flex flex-col">
          <Text>Nome: {aluno?.nome}</Text>
          <Text>Turma: {aluno?.turma}</Text>
          <Text size="xlg">{aluno?.escolaId}</Text>
          <Text size="xlg">{aluno?.alunoId}</Text>
          <Text size="xlg">Turno: {aluno?.turno}</Text>
        </div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
