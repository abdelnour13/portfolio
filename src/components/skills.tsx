import { useState } from "react";
import { ISkillsCollection, SkillsList, Section } from "../common";
import { RiBrainLine } from "react-icons/ri";
import { useActiveSection } from "../hooks";

const skillsProps : ISkillsCollection = {
    title : "AI & Data Science",
    yearsOfExperience : 3,
    skills : [
        { name : "Computer Vison",experience : 90 },
        { name : "Computer Vison",experience : 90 },
        { name : "Computer Vison",experience : 90 },
        { name : "Computer Vison",experience : 90 },
        { name : "Computer Vison",experience : 90 }
    ],
}

export function Skills(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const [activeSkill,setActiveSkill] = useState<number | null>(null);

    const onOpenClick = (index : number) => {
        return () => {
            if (activeSkill === index) {
                setActiveSkill(null);
                return;
            } 
            setActiveSkill(index);
        }
    }

    const [ref] = useActiveSection({ id : "skills" });

    return (
        <Section title="Skills" description="My technical & miscellaneous skills" {...props} id="skills" >
            <div className="w-full grid grid-cols-1 px-2 gap-12 sm:grid-cols-2 sm:px-0" ref={ref} >
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 0} onOpenClick={onOpenClick(0)} />
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 1} onOpenClick={onOpenClick(1)} />
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 2} onOpenClick={onOpenClick(2)} />
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 3} onOpenClick={onOpenClick(3)} />
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 4} onOpenClick={onOpenClick(4)} />
                <SkillsList {...skillsProps} icon={<RiBrainLine size={40} />} isOpen={activeSkill === 5} onOpenClick={onOpenClick(5)} />
            </div>
        </Section>
    )
}