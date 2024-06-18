import { FaArrowRight } from "react-icons/fa";

interface IProject {
    picture : string;
    title : string;
    description : string;
    link : string;
};

export function Project(props : IProject) {
    return (
        <div className="px-4" >
            <div className="flex rounded-2xl items-center gap-8 p-4 dark:bg-color-1 dark:bg-opacity-10">
                <div className="flex items-center w-6/12 py-4" >
                    <img src={props.picture} className="w-full" alt="project" />
                </div>
                <div className="w-6/12" >
                    <h3  className="text-xl font-semibold mb-3" >{props.title}</h3>
                    <p className="text-gray-500 mb-4" >{props.description}</p>
                    <a className="inline-flex gap-2 bg-color-1 p-3 rounded text-white items-center hover:bg-color-1-hover" href={props.link} >
                        <div>View</div>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}