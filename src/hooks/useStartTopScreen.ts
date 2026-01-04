import { useEffect } from "react";
export const useStartTopScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [0]);
}