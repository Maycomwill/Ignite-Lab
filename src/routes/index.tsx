import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { Welcome } from "../pages/Welcome";
import { LogIn } from "../pages/LogIn";
import { Register } from "../pages/Register";
import { Escola } from "../pages/Escola";
import { Turma } from "../pages/Turma";
import { AlunoDetails } from "../pages/AlunoDetails";
import EscolaCadastro from "../pages/EscolaCadastro";
import { AlunoCadastro } from "../pages/AlunoCadastro";
import { TurmaCadastro } from "../pages/TurmaCadastro";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
              <div className="w-96 gap-4 flex flex-col items-strech text-center">
                <Text className="text-xlg">Não há nada aqui</Text>
                <Link to="/">
                  <Button>Volte para a Home</Button>
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/" element={<Welcome />}>
          <Route path="/escolas/cadastro" element={<EscolaCadastro />} />
        </Route>
        <Route path="/escolas/:escolaid" element={<Escola />} />
        <Route
          path="/escolas/:escolaid/cadastro-de-turma"
          element={<TurmaCadastro />}
        />
        <Route path="/escolas/:escolaid/:turmaid" element={<Turma />} />
        <Route path=":alunoid" element={<AlunoDetails />} />
        <Route path="/escolas/:escolaid/:turmaid/cadastro-de-aluno" element={<AlunoCadastro />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
