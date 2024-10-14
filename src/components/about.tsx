import { useContext } from "react";
import { ContactMe, Section } from "../common";
import { ContentContext } from "../context";
import { useActiveSection } from "../hooks";

export function About(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const [ref] = useActiveSection({ id: "about" });
    const content = useContext(ContentContext);

    return (
        <Section title="About" description="A little bit about my self" {...props} id='about' >
            <div className="flex flex-col sm:flex-row sm:gap-20 gap-8 w-full" ref={ref} >
                <div className="sm:w-5/12 flex items-center" >
                    <img src={content?.images.about} alt="" className="sm:w-full w-8/12 mx-auto rounded-xl" />
                </div>
                <div className="sm:w-7/12" >
                    <p className="text-gray-500 max-w-[35ch] mb-4" >
                        I am a dedicated Machine Learning Engineer with a background in
                        Computer Science, specializing in Python and PyTorch for developing robust
                        machine learning models. Proficient in S QL for efficient data manipulation
                        and analysis, I am committed to leveraging my technical skills to drive
                        innovative solutions. My educational foundation and hands-on experience
                        equip me to tackle complex challenges and contribute effectively to
                        dynamic teams.
                    </p>
                    <ContactMe />
                </div>
            </div>
        </Section>
    )
}