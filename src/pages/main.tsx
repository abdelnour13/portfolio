import { useState } from "react";
import { About, Experiences, Header, Projects, Skills,ContactMe, Footer } from "../components";
import { ActiveSectionContext } from '../context';
import { useActiveSection } from "../hooks";

export function Main() {

    const [activeSection,setActiveSection] = useState<string>("home");

    const TopOfThePage = () => {

        const [ref] = useActiveSection({ id : "home" })

        return (
            <div id="home" ref={ref} ></div>
        )
    }

    return <ActiveSectionContext.Provider value={{ activeSection,setActiveSection }} >
        <TopOfThePage />
        <Header />
        <div className="sm:max-w-4xl m-auto" >
            <main className="sm:w-11/12 mx-auto [*&>*]:my-24" >
                <About />
                <Skills />
                <Experiences />
                <Projects />
                <ContactMe />
            </main>
        </div>
        <Footer />
    </ActiveSectionContext.Provider>
}

