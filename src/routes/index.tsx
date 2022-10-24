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
          <Route path="/escolas/:escolaId" element={<Escola />}>
            <Route path=":turmaId" element={<Turma />}></Route>
          </Route>
          <Route path=":alunoId" element={<AlunoDetails />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
