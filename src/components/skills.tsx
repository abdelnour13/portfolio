import { useState } from "react";
import { ISkillsCollection, SkillsList, Section } from "../common";
import { RiBrainLine } from "react-icons/ri";

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

export function Skills() {

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

    return (
        <Section title="Skills" description="My technical & miscellaneous skills" >
            <div className="w-full grid grid-cols-2 gap-12" >
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