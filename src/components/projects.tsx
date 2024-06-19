import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";
import { useActiveSection, useCarsoule } from "../hooks";
import { Carsoule,Project,Section } from '../common';

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

    const items = Array(9).fill(0).map((v,i) => {
        return <Project 
            description="An Open-source end-to-end library containing all implementations of GANs with pretrained weights, training & evaulating functionalities, and other zero-shot features. Under early-development stages."
            link="/"
            picture="graph.png"
            title="OnlyGANs"
        />
    })

    const [index,onNextClick,onPrevClick] = useCarsoule({ elementsCount : items.length });

    const [ref] = useActiveSection({ id : "projects" });

    return (
        <Section title='Projects' description='My works, projects & contributions' {...props} id="projects" className="px-0" >
            <div className="" ref={ref} >
                <Carsoule 
                    items={items}
                    prev={<PreviousButton onClick={onPrevClick} />}
                    next={<NextButton onClick={onNextClick} />}
                    index={index}
                />
            </div>
        </Section>
    )
}