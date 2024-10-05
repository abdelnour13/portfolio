import { createContext } from "react";
import { ISkillsCollection,IExperience,IProject } from "../common";

export interface IContent {
    social : Record<string, string>;
    images : {
        hero : string;
        about : string;
    },
    cv : {
        download : string;
        view : string;
    },
    email : string;
    skills : ISkillsCollection[];
    experience : {
        academic : IExperience[];
        professional : IExperience[];
    },
    projects : IProject[];
}

export const ContentContext = createContext<IContent | null>(null);