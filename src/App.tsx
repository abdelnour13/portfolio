import "./App.css";
import { ThemeContext } from "./context";
import { useTheme } from "./hooks";
import { Main } from "./pages";

function App() {
  
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="App w-full dark:bg-color-4 dark:text-color-2 relative"
      >
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
