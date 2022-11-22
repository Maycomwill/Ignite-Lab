import { NotePencil } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useStudents } from "../hooks/useStudents";

function ObservaçõesUpdate() {
  const navigate = useNavigate();
  const params = useParams();
  const [noteUpdated, setNoteUpdated] = useState<string | null>(null);
  const { studentsData, handleUpdateNotesFromStudent, handleWithStudentsDataFromDb } = useStudents();

  async function handleNoteUpdate(e: FormEvent) {
    e.preventDefault()
    const updatingNote = await handleUpdateNotesFromStudent(`${params.alunoid}`, `${noteUpdated}`)
    
  }

  return (
    <>
      <div className="w-full">
        <form action="updateNotes" className="w-full flex flex-col gap-4 p-4" onSubmit={handleNoteUpdate}>
          <div className="w-[80%] m-auto">
            <TextInput.Root>
              <TextInput.Icon>
                <NotePencil />
              </TextInput.Icon>
              <TextInput.Input
                placeholder="Digite suas anotações sobre esse aluno(a)"
                autoComplete="off"
                onChange={(e) => setNoteUpdated(e.target.value)}
              ></TextInput.Input>
            </TextInput.Root>
          </div>
          <div className="w-[10%] m-auto">
            <Button
              type="submit"
              size="sm"
            >
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ObservaçõesUpdate;
