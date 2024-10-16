import { NavBar } from "../common/nav-bar";
import { Hero } from '../common';

export function Header() {
    return (
        <>
            <header className="w-full sticky top-0 bg-color-2 z-50 dark:bg-color-4 sm:px-0 px-4" >
                <NavBar />
            </header>
            <Hero />
        </>
    )
}