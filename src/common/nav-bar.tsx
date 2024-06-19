import { useContext, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ActiveSectionContext, ThemeContext } from "../context";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { TbTools } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  
  const { theme, setTheme } = useContext(ThemeContext);
  const { activeSection } = useContext(ActiveSectionContext);

  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const Link = (props: { content: string; section: string,icon : JSX.Element }) => {

    const { section, content, icon } = props;

    return activeSection === section ? (
      <a
        href={`#${section}`}
        className="text-color-1 transition-colors duration-300"
      >
        <span className="sm:hidden flex justify-center mb-1" >{icon}</span>
        {content}
      </a>
    ) : (
      <a
        href={`#${section}`}
        className="hover:text-color-1 transition-colors duration-300"
      >
        <span className="sm:hidden flex justify-center mb-1" >{icon}</span>
        {content}
      </a>
    );

  };

  const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);

  const onMenuClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className="w-full sm:shadow-sm" >
      <nav className="max-w-4xl m-auto flex sm:flex-row flex-row-reverse items-center sm:py-0 py-6 font-medium">
        <div className="flex gap-2 items-center">
          <FaRegCircle size={15} />
          <a
            href="/"
            className="block hover:text-color-1 transition-colors duration-300"
          >
            Abdelnour
          </a>
        </div>
        <div className="flex-grow h-2" />
        <div className="flex items-center gap-4 sm:flex-row flex-row-reverse relative" >
          <ul 
            className={twMerge(
              "sm:shadow-none shadow-sm sm:dark:border-x-0 sm:dark:border-b-0 dark:border-b dark:border-x border-color-1 bg-color-2 dark:bg-color-4",
              "items-center transition-transform duration-300 sm:text-base text-xs [*&>*]:flex [*&>*]:justify-center w-[100vw]",
              "sm:w-auto py-8 rounded-b-3xl gap-8 sm:flex grid grid-cols-3 sm:flex-row flex-col sm:static absolute -left-4",
              isMenuOpen ? 'translate-y-[7rem] sm:translate-y-0' : '-translate-y-[120%] sm:translate-y-0'
            )}
          >
            <li>
              <Link content="Home" section="home" icon={<AiOutlineHome size={20} />} />
            </li>
            <li>
              <Link content="About" section="about" icon={<GoPerson size={20} />} />
            </li>
            <li>
              <Link content="Skills" section="skills" icon={<TbTools size={20} />} />
            </li>
            <li>
              <Link content="Experience" section="experiences" icon={<MdOutlineWorkOutline size={20} />} />
            </li>
            <li>
              <Link content="Projects" section="projects" icon={<AiOutlineFundProjectionScreen size={20} />} />
            </li>
            <li>
              <Link content="Contact Me" section="contact-me" icon={<MdOutlineContacts size={20} />} />
            </li>
          </ul>
          <div>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={25}
            />
          </div>
          <button className="sm:hidden block" onClick={onMenuClick} >
            {!isMenuOpen 
              ? <RxHamburgerMenu size={25} />
              : <IoMdClose size={25}/>
            }
          </button>
        </div>
      </nav>
    </div>
  );
}
