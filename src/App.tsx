import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./core/providers/AuthProvider";
import AppRouter from "./core/router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
