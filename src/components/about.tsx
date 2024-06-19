import { ContactMe,Section } from "../common";
import { useActiveSection } from "../hooks";

export function About(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const [ref] = useActiveSection({ id : "about" });

    return (
        <Section title="About" description="A little bit about my self" {...props} id='about' >
            <div className="flex flex-col sm:flex-row sm:gap-20 gap-8 w-full" ref={ref} >
                <div className="sm:w-5/12 flex items-center" >
                    <img src="https://aksh-ai.com/assets/img/me.png" alt="" className="sm:w-full w-8/12 mx-auto rounded-xl" />
                </div>
                <div className="sm:w-7/12" >
                    <p className="text-gray-500 max-w-[35ch] mb-4" >
                        I am a passionate & proactive human with strong expertise and experience of 3+ years in Machine/Deep Learning, Software Development, Computer Vision, Natural Language Processing, & Full-Stack Web Development. I am currently leading the Machine Learning team at BrainSightAI to build an AI-based Neuroinformatics and Personalized Human Brain Mapping platform. Self-motivation, attention to detail, innovative problem solving, strong analytical skills, articulate communication & creativity are the things that drive me to achieve great results. If you're looking to hire, collaborate, or require any assistance, leave me an email.
                    </p>
                    <ContactMe />
                </div>
            </div>
        </Section>
    )
}