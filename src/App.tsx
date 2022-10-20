import MainFooter from "./components/MainFooter";
import { LogIn } from "./pages/LogIn";
import { IndexRoutes } from "./routes";
import "./styles/main.css";

function App() {
  return (
    <div className="max-w-screen w-screen max-h-screen h-screen flex flex-col gap-2">
      <div className="w-full h-full">
        <IndexRoutes />
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
