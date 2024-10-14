import { CiCalendar } from "react-icons/ci";

export interface IExperience {
  title : string;
  at : string;
  link : string;
  from : number;
  to : number | null;
}

export interface IExperienceProps extends IExperience {
  direction : "left" | "right";
}

export function Experience(props: IExperienceProps) {
  
  const bulletClass = props.direction === "left" 
    ? `w-4 aspect-square absolute bg-color-1 right-0 top-0 rounded-full translate-x-[calc(50%+1rem)] -translate-y-2/4`
    : `w-4 aspect-square absolute bg-color-1 left-0 top-0 rounded-full -translate-x-[calc(50%+1rem)] -translate-y-2/4`

  return (
    <div className="flex gap-8">
      {props.direction === "right" ? <div className="w-6/12" /> : null}
      <div className="w-6/12 relative">
        <div className={bulletClass} />
        <h3 className="font-medium text-lg mb-1">
          {props.title}
        </h3>
        <a className="text-gray-500 mb-6 underline" href={props.link} target="_blank" rel="noreferrer" >
          {props.at}
        </a>
        <div className="flex text-gray-500 items-center gap-1">
          <CiCalendar size={15} />
          <div className="text-xs">{props.from} - {props.to || 'Present'}</div>
        </div>
      </div>
      {props.direction === "left" ? <div className="w-6/12" /> : null}
    </div>
  );
}
