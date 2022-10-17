import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { Home } from "../pages/Home";
import { LogIn } from "../pages/LogIn";
import { Register } from "../pages/Register";

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
                  <Button >
                    Volte para a Home
                  </Button>
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  )
}