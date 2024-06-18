import { IoSend } from "react-icons/io5";

export interface IContactMe {
  className? : string;
}

export function ContactMe(props : IContactMe) {
  return (
    <a
      className={`inline-flex gap-2 p-4 bg-color-1 text-white font-medium items-center rounded-md hover:bg-color-1-hover transition-colors duration-200 ${props.className||''}`}
      href="/"
    >
      <div>Contact Me</div>
      <IoSend />
    </a>
  );
}
