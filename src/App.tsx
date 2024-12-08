import Signup from "./pages/Signup";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Signup />
    </ThemeProvider>
  );
}

export default App;
