import { IoIosArrowDown } from "react-icons/io";
import { Icon } from '@iconify/react';

export interface Skill {
    name : string;
    experience : number;
}

export interface ISkillsCollection {
    title : string;
    yearsOfExperience : number;
    skills : Skill[];
    icon : string;
}

export interface ISkillsList extends ISkillsCollection {
    isOpen : boolean;
    onOpenClick : () => void;
}

function SkillItem(props : Skill) {
    return (
        <li className="block" >
            <div className="flex justify-between mb-2" >
                <p className="font-medium" >{props.name}</p>
                <p className="text-gray-500 font-medium" >{props.experience}%</p>
            </div>
            <div className="relative" >
                <div className={`h-1 absolute top-0 left-0 bg-color-1 opacity-30 w-full`} />
                <div className="h-1 rounded-full bg-color-1-hover" style={{
                    width : `${props.experience}%`,
                }} />
            </div>
        </li>
    )
}

export function SkillsList(props : ISkillsList) {

    const { isOpen,onOpenClick } = props;

    return (
        <div>
            <div className="flex gap-3 items-center mb-4" >
                <div className="text-color-1-hover" >
                    <Icon icon={(props.icon || "lucide:brain")} className="text-4xl text-color-1" />
                </div>
                <div className="flex items-center flex-grow" >
                    <div>
                        <h3 className="text-lg font-bold" >{props.title}</h3>
                        <p className="text-gray-500 text-sm" >{props.yearsOfExperience}+ Years XP</p>
                    </div>
                    <div className="flex-grow" />
                    <div>
                        <button className="text-color-1 transition-rotate duration-500" onClick={onOpenClick} style={{
                            rotate : isOpen ? '-180deg' : '0deg'
                        }} >
                            <IoIosArrowDown size={25} />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen ? <div className="flex gap-3" >
                <div className="sm:block hidden" >
                    <Icon icon={(props.icon || "lucide:brain")} className="text-4xl text-transparent" />
                </div>
                <ul className="grow [*&>*]:mb-5" >
                    {props.skills.map((v) => <SkillItem {...v} />)}
                </ul>
            </div> : null }
        </div>
    )
}