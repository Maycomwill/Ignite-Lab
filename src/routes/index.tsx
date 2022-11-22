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
import ObservaçõesUpdate from "../pages/ObservaçõesUpdate";
import { BlankPage } from "../components/BlankPage";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={<BlankPage />}
        />
        <Route path="/" element={<Welcome />}>
          <Route path="/cadastro" element={<EscolaCadastro />} />
        </Route>
        <Route path="/:escolaid" element={<Escola />} />
        <Route
          path="/:escolaid/cadastro-de-turma"
          element={<TurmaCadastro />}
        />
        <Route path="/:escolaid/:turmaid" element={<Turma />} />
        <Route
          path="/:escolaid/:turmaid/cadastro-de-aluno"
          element={<AlunoCadastro />}
        />
        <Route path="/:escolaid/:turmaid/:alunoid" element={<AlunoDetails />}>
          <Route
            path="/:escolaid/:turmaid/:alunoid/update"
            element={<ObservaçõesUpdate />}
          />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
