import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";
import { useActiveSection, useCarsoule } from "../hooks";
import { Carsoule,Project,Section } from '../common';
import { useContext } from "react";
import { ContentContext } from "../context";

export function Projects(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const NextButton = (props : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (
            <button {...props} className="text-color-1 sm:text-5xl text-4xl" >
                <MdNavigateNext />
            </button>
        )
    }

    const PreviousButton = (props : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (
            <button {...props} className="text-color-1 sm:text-5xl text-4xl" >
                <MdNavigateBefore />
            </button>
        )
    }

    const content = useContext(ContentContext);

    const items = content?.projects.map((v,i) => {
        return <Project {...v} />
    })

    const [index,onNextClick,onPrevClick] = useCarsoule({ elementsCount : items!.length });

    const [ref] = useActiveSection({ id : "projects" });

    return (
        <Section title='Projects' description='My works, projects & contributions' {...props} id="projects" className="px-0" >
            <div className="" ref={ref} >
                <Carsoule 
                    items={items!}
                    prev={<PreviousButton onClick={onPrevClick} />}
                    next={<NextButton onClick={onNextClick} />}
                    index={index}
                />
            </div>
        </Section>
    )
}