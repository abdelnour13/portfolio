import { useState } from "react";

interface IUseCarsoule {
    elementsCount : number;
}

export function useCarsoule(args : IUseCarsoule) : [number,() => void,() => void] {

    const [index,setIndex] = useState<number>(0);

    const onNextClick = () => {
        setIndex(prev => {
            if (prev === args.elementsCount - 1) {
                return prev;
            }
            return (prev + 1) % args.elementsCount;
        })
    } 
    
    const onPrevClick = () => {
        setIndex(prev => {
            if (prev === 0) {
                return prev;
            }
            return (prev - 1) % args.elementsCount;
        })
    }

    return [index,onNextClick,onPrevClick];

}