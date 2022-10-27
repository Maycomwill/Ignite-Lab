import MainFooter from "./components/MainFooter";
import { LogIn } from "./pages/LogIn";
import { IndexRoutes } from "./routes";
import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <IndexRoutes />
    </div>
  );
}

export default App;
