import AppProvider from "./hooks/index";
import { IndexRoutes } from "./routes";
import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <AppProvider>
        <IndexRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
