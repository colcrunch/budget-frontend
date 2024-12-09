import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
