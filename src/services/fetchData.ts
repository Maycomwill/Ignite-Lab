export const escolaData = [
  {
    "id": 1,
    "name": "EREM Fernando Mota",
    "location": "Boa Viagem"
  },
  {
    "id": 2,
    "name": "EREM João Lopes S. S.",
    "location": "Ribeirão"
  },
  {
    "id": 3,
    "name": "EREM Santos Dumont",
    "location": "Boa Viagem"
  },
  {
    "id": 4,
    "name": "Escola São José",
    "location": "Ribeirão"
  },
];

export const alunosData = [
  {
    "alunoId": 1,
    "nome": "João Vitor de Farias Souza",
    "escolaId": 2,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 2,
    "nome": "Nathália Raphaella de Sousa Lima",
    "escolaId": 1,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 3,
    "nome": "Maycom Willams de Farias Silva",
    "escolaId": 1,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 4,
    "nome": "Gustavo Vinícius de Farias Souza",
    "escolaId": 3,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 5,
    "nome": "José Francisco de Sousa Lima Neto",
    "escolaId": 2,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 6,
    "nome": "Marina Gabriela Silva dos Santos",
    "escolaId": 3,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 7,
    "nome": "Juride Cristina de Farias",
    "escolaId": 2,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 8,
    "nome": "Maria Nilcinete de Sousa Lima",
    "escolaId": 2,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 9,
    "nome": "Marivaldo Francisco da Silva",
    "escolaId": 3,
    "turma": "3º ano A",
    "turno": "diurno",
  },
  {
    "alunoId": 10,
    "nome": "Risonaldo Barros de Lima",
    "escolaId": 3,
    "turma": "3º ano A",
    "turno": "diurno",
  },
]

export function getEscola(number: any) {
  return escolaData.find(
    (escola) => escola.id === number
  );

};

export function getAlunos(number: any) {
  return alunosData.filter(
    (aluno) => {if(aluno.escolaId === number) return(
      aluno
    );}
  )
}