import { IoSend } from "react-icons/io5";

export interface IContactMe {
  className? : string;
}

export function ContactMe(props : IContactMe) {
  return (
    <a
      className={`inline-flex gap-2 sm:p-4 p-3 bg-color-1 text-white font-medium items-center rounded-md hover:bg-color-1-hover transition-colors duration-200 ${props.className||''}`}
      href="#contact-me"
    >
      <div>Contact Me</div>
      <IoSend />
    </a>
  );
}
