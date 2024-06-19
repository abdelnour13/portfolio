import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="w-full bg-color-1 dark:bg-color-4-dark text-white py-16">
      <div className="w-fit mx-auto mb-12">
        <ul className="flex gap-8 sm:text-3xl text-2xl" >
            <li><a href="/"><FiGithub /></a></li>
            <li><a href="/"><FiLinkedin /></a></li>
            <li><a href="/"><FiTwitter /></a></li>
          </ul>
      </div>
      <div className="w-fit mx-auto mb-12" >
        <ul className="flex sm:flex-nowrap flex-wrap justify-center sm:text-base text-sm sm:px-0 px-4 items-center gap-8">
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/"
              className="hover:underline"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="w-fit mx-auto text-xs" >
        &copy; Abdelnour, 2024.
      </div>
    </footer>
  );
}
