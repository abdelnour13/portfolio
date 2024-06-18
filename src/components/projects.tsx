import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";
import { useCarsoule } from "../hooks";
import { Carsoule,Project,Section } from '../common';

export function Projects() {

    const NextButton = (props : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (
            <button {...props} className="text-color-1" >
                <MdNavigateNext size={60} />
            </button>
        )
    }

    const PreviousButton = (props : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (
            <button {...props} className="text-color-1" >
                <MdNavigateBefore size={60} />
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

    return (
        <Section title='Projects' description='My works, projects & contributions' >
            <div className="h-96" >
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