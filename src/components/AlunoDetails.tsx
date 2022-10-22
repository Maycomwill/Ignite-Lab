import React from 'react'
import { useParams } from 'react-router-dom'
import { getAlunoDetail } from '../services/fetchData'
import { Text } from './Text'

export function AlunoDetails() {
  const params = useParams();
  const aluno = getAlunoDetail(parseInt(params.alunoId, 10));

  return (
    <div className='bg-purple-500 w-full h-full flex flex-col'>
      <Text>{aluno?.nome}</Text>
      <Text>{aluno?.turma}</Text>
      <Text size='xlg'>{aluno?.escolaId}</Text>
      <Text size='xlg'>{aluno?.alunoId}</Text>
      <Text size='xlg'>{aluno?.turno}</Text>
    </div>
  )
}

