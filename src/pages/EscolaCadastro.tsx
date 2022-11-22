import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { BookBookmark, Buildings, Hash, MapPin } from "phosphor-react";
import { FormEvent, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { useSchool } from "../hooks/useSchools";
import { db } from "../services/firebaseConfig";

interface EscolaCadastroProps extends ReactElement {}

function EscolaCadastro(): EscolaCadastroProps {
  const { user, schoolData, handleWithSchoolDataFromDb } = useSchool();

  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [schoolCEP, setSchoolCEP] = useState("");
  const [schoolId, setSchoolId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const docCollectionRef = collection(db, "schools");

  async function handleSchoolRegister(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const schoolRegister = await addDoc(docCollectionRef, {
      schoolName: schoolName,
      userId: auth.currentUser?.uid,
      address: schoolAddress,
      numberAddress: schoolNumber,
      CEPAddres: schoolCEP,
      createdAt: serverTimestamp(),
    });
      setSchoolId(schoolRegister.id)
    }
    useEffect(() => {
      if(schoolId !== null){
        addingSchoolIdToTheDocumentCreated() 
      }
    }, [schoolId])

    async function addingSchoolIdToTheDocumentCreated() {
      const docRef = doc(db, "schools", `${schoolId}`)
      const addingSchoolIdToDBDocument = await updateDoc(docRef, {
        schoolId: `${schoolId}`
      });
      setLoading(false)
      alert("Escola cadastrada com sucesso!")
      handleWithSchoolDataFromDb(auth.currentUser?.uid);
      navigate('/')
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center mt-4">
      <header className="text-center">
        <Heading size="lg" className="text-gray-100">
          Preencha os campos e cadastre uma escola
        </Heading>
      </header>
      <form
        onSubmit={handleSchoolRegister}
        className="flex flex-col gap-4 mt-4 w-full max-w-sm"
      >
        <label htmlFor="school-name" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Nome da escola</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <BookBookmark />
            </TextInput.Icon>
            <TextInput.Input
              required
              onChange={(e) => setSchoolName(e.target.value)}
              type="text"
              autoComplete="false"
              id="school-name"
              placeholder="Ex: EREM Santos Dumont"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="address" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Endereço</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Buildings />
            </TextInput.Icon>
            <TextInput.Input
              required
              onChange={(e) => setSchoolAddress(e.target.value)}
              type="text"
              autoComplete="false"
              id="address"
              placeholder="Ex: Av. Cais do Apolo"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="school-number" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">Nº</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Hash />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setSchoolNumber(e.target.value)}
              type="text"
              autoComplete="false"
              id="school-number"
              placeholder="Ex: nº 15"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="CEP-Number" className="flex flex-col gap-3">
          <Text className="text-sm font-semibold">CEP</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <MapPin />
            </TextInput.Icon>
            <TextInput.Input
              onChange={(e) => setSchoolCEP(e.target.value)}
              type="text"
              autoComplete="false"
              id="CEP-Number"
              placeholder="Ex: 50030-903"
            />
          </TextInput.Root>
        </label>
        <Button type="submit">Cadastrar escola</Button>
      </form>
    </div>
  );
}

export default EscolaCadastro;
