import { useContext } from "react";
import { FaRegCircle } from "react-icons/fa";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from "../context";

export function NavBar() {

  const { theme,setTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="w-full shadow-sm" >
      <nav className="max-w-4xl m-auto flex items-center py-6 font-medium">
        <div className="flex gap-2 items-center" >
          <FaRegCircle size={15} />
          <a href="/" className="block hover:text-color-1 transition-colors duration-300" >Abdelnour</a>
        </div>
        <div className="flex-grow h-2" />
        <div>
          <ul className="flex items-center gap-8" >
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300" >Home</a>
            </li>
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300" >About</a>
            </li>
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300">Skills</a>
            </li>
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300">Experience</a>
            </li>
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="/" className="hover:text-color-1 transition-colors duration-300">Contact Me</a>
            </li>
            <li>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={25}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
