import "./App.css";
import { ThemeContext,ContentContext,IContent } from "./context";
import { getContent } from "./axios";
import { useTheme } from "./hooks";
import { Main } from "./pages";
import { useEffect, useState } from "react";

function App() {
  
  const [theme, setTheme] = useTheme();

  const [content,setContent] = useState<IContent | null>(null);

  useEffect(() => {
    getContent().then((data) => {
      console.log(data);
      setContent(data);
    });
  },[])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ContentContext.Provider value={content}>
        <div
          className="App w-full dark:bg-color-4 dark:text-color-2 relative"
        >
          {content !== null ? <Main /> : null}
        </div>
      </ContentContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
