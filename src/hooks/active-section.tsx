import { useContext, useEffect } from "react";
import { useInView,IntersectionOptions } from "react-intersection-observer";
import { ActiveSectionContext } from "../context";

export interface IActiveSection extends IntersectionOptions {
    id : string
}

export function useActiveSection(args : IActiveSection) : [(node?: Element | null | undefined) => void] {

    const { id,...rest } = args;

    const { ref, inView } = useInView({ threshold: 0, rootMargin: "0px 0px -50% 0px",...rest });

    const { setActiveSection } = useContext(ActiveSectionContext);

    useEffect(() => {
        if (inView) {
            setActiveSection(id);
        }
    }, [inView,id,setActiveSection])

    return [ref];

}