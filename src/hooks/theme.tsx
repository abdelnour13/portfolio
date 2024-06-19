import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme() : [Theme,(theme : Theme) => void] {

    const [currentTheme,setTheme] = useState<Theme>("light");

    const changeTheme = (theme : Theme) => {
        if (theme !== currentTheme) {
            setTheme(theme);
        }
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }

    useEffect(() => {

        const theme = localStorage.getItem('theme');

        if (theme !== null) {
            changeTheme(theme === "dark" ? "dark" : "light");
        }
        
    });

    return [currentTheme,changeTheme]

}