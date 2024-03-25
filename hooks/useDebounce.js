import { useEffect, useRef } from "react";

const useDebaounce = (callback, delay) => {
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        return () => {
          if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
          }
        };
    },[])

    const debaouncedCallback = (...args) => {
        if(timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debaouncedCallback;
};

export default useDebaounce;