import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebaseConfig";

const schoolsCollection = collection(db, "schools")

export async function getSchools() {
  const [schoolsData, setSchoolsData] = useState([])
  const DataContext = React.createContext(schoolsData);
  
  await getDocs(schoolsCollection).then((snapshot) => {
    snapshot.docs.map((doc: any) => {
      setSchoolsData({ ...doc.data(), id: doc.id})
    })
    console.log(schoolsData)
  })
}

export let escolaData = [
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

export const turmasData = [
  {
    "turmaId": 1,
    "escolaId": 1,
    "nome": "3º ano A"
  },
  {
    "turmaId": 2,
    "escolaId": 2,
    "nome": "3º ano A"
  },
  {
    "turmaId": 3,
    "escolaId": 3,
    "nome": "3º ano A"
  },
  {
    "turmaId": 4,
    "escolaId": 4,
    "nome": "3º ano A"
  },
  {
    "turmaId": 5,
    "escolaId": 1,
    "nome": "3º ano A"
  },
]

export const alunosData = [
  {
    "alunoId": 1,
    "nome": "João Vitor de Farias Souza",
    "escolaId": 2,
    "turma": "3º ano A",
    "turmaId": 1,
    "turno": "diurno",
  },
  {
    "alunoId": 2,
    "nome": "Nathália Raphaella de Sousa Lima",
    "escolaId": 1,
    "turma": "3º ano A",
    "turmaId": 1,
    "turno": "diurno",
  },
  {
    "alunoId": 3,
    "nome": "Maycom Willams de Farias Silva",
    "escolaId": 1,
    "turma": "3º ano B",
    "turmaId": 2,
    "turno": "diurno",
  },
  {
    "alunoId": 4,
    "nome": "Gustavo Vinícius de Farias Souza",
    "escolaId": 3,
    "turma": "3º ano B",
    "turmaId": 2,
    "turno": "diurno",
  },
  {
    "alunoId": 5,
    "nome": "José Francisco de Sousa Lima Neto",
    "escolaId": 2,
    "turma": "3º ano C",
    "turmaId": 3,
    "turno": "diurno",
  },
  {
    "alunoId": 6,
    "nome": "Marina Gabriela Silva dos Santos",
    "escolaId": 3,
    "turma": "3º ano C",
    "turmaId": 3,
    "turno": "diurno",
  },
  {
    "alunoId": 7,
    "nome": "Juride Cristina de Farias",
    "escolaId": 2,
    "turma": "3º ano D",
    "turmaId": 4,
    "turno": "diurno",
  },
  {
    "alunoId": 8,
    "nome": "Maria Nilcinete de Sousa Lima",
    "escolaId": 2,
    "turma": "3º ano D",
    "turmaId": 4,
    "turno": "diurno",
  },
  {
    "alunoId": 9,
    "nome": "Marivaldo Francisco da Silva",
    "escolaId": 3,
    "turma": "3º ano B",
    "turmaId": 2,
    "turno": "diurno",
  },
  {
    "alunoId": 10,
    "nome": "Risonaldo Barros de Lima",
    "escolaId": 3,
    "turma": "3º ano C",
    "turmaId": 3,
    "turno": "diurno",
  },
]

export function getEscola(number: any) {
  return escolaData.find(
    (escola) => escola.id === number
  );

};

export function getTurmas(number: any) {
  return turmasData.filter(
    (turma) => {if(turma.escolaId === number) return(
      turma
    );}
  )
};

export function getAlunos(number: any) {
  return alunosData.filter(
    (aluno) => {if(aluno.turmaId === number) return(
      aluno
    );}
  )
};

export function getAlunoDetail(number: any) {
  return alunosData.find(
    (aluno) => aluno.alunoId === number
  );

};