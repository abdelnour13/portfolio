import './App.css';
import { ThemeContext } from './context';
import { useTheme } from './hooks';
import { Main } from './pages';



function App() {

  const [theme,setTheme] = useTheme();

  return (
    <div className='App w-full dark:bg-color-4 dark:text-color-2' >
      <ThemeContext.Provider value={{theme,setTheme}} >
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;