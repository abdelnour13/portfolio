interface ICarsoule {
    items : JSX.Element[];
    prev : JSX.Element;
    next : JSX.Element;
    index : number;
};

export function Carsoule(props : ICarsoule) {

    const { index,items } = props;

    return (
        <div className="h-full flex-col" >
            <div className="flex h-full mb-10" >
                {props.prev}
                <ul className="h-full flex w-full relative overflow-hidden sm:mx-4 mx-1" >
                    <div className="opacity-0" >
                        {items[0]}
                    </div>
                    {items.map((item,i) => {
                        return (
                            <li 
                                className={`w-full h-full flex items-center justify-center absolute top-0 transition-left duration-500`} 
                                style={{ left: `${(i - index) * 100}%` }}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
                {props.next}
            </div> 
            <ul className="flex w-fit mx-auto gap-3" >
                {props.items.map((item,i) => {
                    return (
                        <li>
                            {i !== index 
                                ? <div className="sm:w-2.5 w-1.5 aspect-square rounded-full bg-gray-300" />
                                : <div className="sm:w-2.5 w-1.5 aspect-square rounded-full bg-color-1" />
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}