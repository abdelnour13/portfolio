import { createContext } from "react";

export interface IActiveSection {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
}

export const ActiveSectionContext = createContext<IActiveSection>({
    activeSection: "home",
    setActiveSection: (activeSection) => {}
});
