import { About, Experiences, Header, Projects, Skills,ContactMe, Footer } from "../components";


export function Main() {
    return <>
        <Header />
        <div className="max-w-4xl m-auto" >
            <main className="w-11/12 mx-auto [*&>*]:my-24" >
                <About />
                <Skills />
                <Experiences />
                <Projects />
                <ContactMe />
            </main>
        </div>
        <Footer />
    </>
}

