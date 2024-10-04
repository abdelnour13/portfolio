import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { ContentContext } from "../context";
import { useContext } from "react";

export function Footer() {

  const content = useContext(ContentContext);
  const links = content?.social;

  return (
    <footer className="w-full bg-color-1 dark:bg-color-4-dark text-white py-16">
      <div className="w-fit mx-auto mb-12">
        <ul className="flex gap-8 sm:text-3xl text-2xl" >
          <li><a href={links?.github}><FiGithub /></a></li>
          <li><a href={links?.linkedin}><FiLinkedin /></a></li>
          <li><a href={links?.twitter}><FiTwitter /></a></li>
        </ul>
      </div>
      <div className="w-fit mx-auto mb-12" >
        <ul className="flex sm:flex-nowrap flex-wrap justify-center sm:text-base text-sm sm:px-0 px-4 items-center gap-8">
          <li>
            <a
              href="/#home"
              className="hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className="hover:underline"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#experiences"
              className="hover:underline"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact-me"
              className="hover:underline"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="w-fit mx-auto text-xs" >
        &copy; Abdelnour, {new Date(Date.now()).getFullYear()}.
      </div>
    </footer>
  );
}
