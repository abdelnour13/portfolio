import "./App.css";
import { ThemeContext,ContentContext } from "./context";
import { useTheme } from "./hooks";
import { Main } from "./pages";

function App() {
  
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ContentContext.Provider value={null}>
        <div
          className="App w-full dark:bg-color-4 dark:text-color-2 relative"
        >
          <Main />
        </div>
      </ContentContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
