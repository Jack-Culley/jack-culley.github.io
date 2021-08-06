import React, {useState, useEffect} from 'react';

function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setVisibility(entry.isIntersecting);
        }, options);

        if(ref) {
            observer.observe(ref);
        }

        return () => {
            if(ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);
    return [setRef, visibility];
}

export default useOnScreen;