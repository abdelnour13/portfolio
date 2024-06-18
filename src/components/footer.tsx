import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="w-full bg-color-1 dark:bg-color-4-dark text-white py-16">
      <div className="w-fit mx-auto mb-12">
        <ul className="flex gap-8" >
            <li><a href="/"><FiGithub size={30} /></a></li>
            <li><a href="/"><FiLinkedin size={30} /></a></li>
            <li><a href="/"><FiTwitter size={30} /></a></li>
          </ul>
      </div>
      <div className="w-fit mx-auto mb-12" >
        <ul className="flex items-center gap-8">
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
