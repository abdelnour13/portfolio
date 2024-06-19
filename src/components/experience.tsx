import { useEffect, useRef, useState } from 'react';
import { Experience } from '../common';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Section } from '../common';
import { useActiveSection } from '../hooks';


const experiences = [
  {
    title: "Lead Machine Learning Engineer",
    at: "BrainSightAI",
    from: 2023,
    to: null,
  },
  {
    title: "Lead Machine Learning Engineer",
    at: "BrainSightAI",
    from: 2023,
    to: null,
  },
  {
    title: "Lead Machine Learning Engineer",
    at: "BrainSightAI",
    from: 2023,
    to: null,
  },
  {
    title: "Lead Machine Learning Engineer",
    at: "BrainSightAI",
    from: 2023,
    to: null,
  },
  {
    title: "Lead Machine Learning Engineer",
    at: "BrainSightAI",
    from: 2023,
    to: null,
  },
];

export function Experiences(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

  const [type,setType] = useState<"academic" | "professional">("professional");

  const academicRef = useRef<HTMLButtonElement>(null);
  const profetionalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (academicRef.current !== null && profetionalRef.current !== null) {
      if (type === "academic") {
        academicRef.current.classList.add("text-color-1");
        profetionalRef.current.classList.remove("text-color-1");
      } else {
        academicRef.current.classList.remove("text-color-1");
        profetionalRef.current.classList.add("text-color-1");
      }
    }
  }, [type])

  const [ref] = useActiveSection({ id : "experiences" });

  return (
    <Section title="Experience" description="My journey in the academic & professional front" {...props} id='experiences' >
      <div className='text-xl text-gray-500 flex gap-8 font-medium mb-12 w-fit mx-auto' ref={ref} >
        <button 
          className='flex items-center gao-1 hover:text-color-1 transition-colors duration-300' 
          onClick={() => setType("academic")} 
          ref={academicRef}
        >
          <HiOutlineAcademicCap size={30} />
          <div>Academic</div>
        </button>
        <button 
          className='flex items-center gap-1 hover:text-color-1 transition-colors duration-300' 
          onClick={() => setType("professional")} 
          ref={profetionalRef}
        >
          <MdOutlineWorkOutline size={30} />
          <div>Professional</div>
        </button>
      </div>
      <div className="max-w-96 mx-auto relative">
        <div className="bg-color-1 w-[1px] h-full absolute left-2/4 -translate-x-[1px] top-0" />
        {experiences.map((v,i) => <Experience direction={i % 2 === 0 ? "left" : "right"} />)}
        <div className="w-4 aspect-square absolute bg-color-1 right-2/4 bottom-0 rounded-full translate-x-2/4 translate-y-2/4" />
      </div>
    </Section>
  );
}
