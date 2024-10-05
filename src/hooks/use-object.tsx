import { useState } from "react";

export function useObject<T>(obj : T | (() => T)) {

    const [object_,setObject] = useState<T>(obj);

    const update = (partial : Partial<T> |(() => Partial<T>)) => {
        setObject({
            ...object_,
            ...(typeof partial === "function" ? partial() : partial)
        })
    }

    return [object_,update] as const;

}