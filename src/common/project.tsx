import { FaArrowRight } from "react-icons/fa";

export interface IProject {
    picture : string;
    title : string;
    description : string;
    link : string;
};

export function Project(props : IProject) {
    return (
        <div className="sm:px-4" >
            <div className="flex-col sm:flex-row flex items-stretch rounded-2xl gap-8 sm:p-4 dark:bg-color-1 sm:dark:bg-opacity-10 dark:bg-opacity-0">
                <div className="flex sm:w-6/12 sm:py-4 items-center" >
                    <img src={props.picture} className="object-cover h-full" alt="project" />
                </div>
                <div className="sm:w-6/12" >
                    <h3  className="sm:text-xl text-lg font-semibold mb-3" >{props.title}</h3>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm" >{props.description}</p>
                    <a 
                        className="sm:text-base text-sm inline-flex gap-2 bg-color-1 sm:p-3 p-2 rounded text-white items-center hover:bg-color-1-hover" 
                        href={props.link} 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>View</div>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}