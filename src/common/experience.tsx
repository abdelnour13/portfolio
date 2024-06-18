import { CiCalendar } from "react-icons/ci";

interface IExperience {
  direction: "left" | "right";
}

export function Experience(props: IExperience) {
  
  const bulletClass = props.direction === "left" 
    ? `w-4 aspect-square absolute bg-color-1 right-0 top-0 rounded-full translate-x-[calc(50%+1rem)] -translate-y-2/4`
    : `w-4 aspect-square absolute bg-color-1 left-0 top-0 rounded-full -translate-x-[calc(50%+1rem)] -translate-y-2/4`

  return (
    <div className="flex gap-8">
      {props.direction === "right" ? <div className="w-6/12" /> : null}
      <div className="w-6/12 relative">
        <div className={bulletClass} />
        <h3 className="font-medium text-lg mb-1">
          Lead Machine Learning Engineer
        </h3>
        <p className="text-gray-500 mb-6">BrainSightAI</p>
        <div className="flex text-gray-500 items-center gap-1">
          <CiCalendar size={15} />
          <div className="text-xs">2023 - Present</div>
        </div>
      </div>
      {props.direction === "left" ? <div className="w-6/12" /> : null}
    </div>
  );
}
