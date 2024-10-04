import { useContext, useState } from "react";
import { SkillsList, Section } from "../common";
import { RiBrainLine } from "react-icons/ri";
import { useActiveSection } from "../hooks";
import { ContentContext } from "../context";

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

    const content = useContext(ContentContext);

    return (
        <Section title="Skills" description="My technical & miscellaneous skills" {...props} id="skills" >
            <div className="w-full grid grid-cols-1 px-2 gap-12 sm:grid-cols-2 sm:px-0" ref={ref} >
                {
                    content?.skills.map((skill,index) => (
                        <SkillsList {...skill} icon={<RiBrainLine size={40} />} isOpen={activeSkill === index} onOpenClick={onOpenClick(index)} />
                    ))
                }
            </div>
        </Section>
    )
}