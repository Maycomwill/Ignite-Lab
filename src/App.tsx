import MainFooter from "./components/MainFooter";
import { UserContextProvider } from "./contexts/UserContext";
import { LogIn } from "./pages/LogIn";
import { IndexRoutes } from "./routes";
import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <UserContextProvider>
        <IndexRoutes />
      </UserContextProvider>
    </div>
  );
}

export default App;
