import {useEffect, useRef, useState} from "react";

export const Autotyper = ({text = "", activate = false, callbackFunction}) => {
    const [placeholder, setPlaceholder] = useState("");
    const index = useRef(0);

    function step() {
        setPlaceholder(prev => prev + text[index.current]);
        index.current++;
    }

    useEffect( () => {
        if(activate) {
            if (index.current < text.length) {
                let addChar = setInterval(step, 30);
                return () => clearInterval(addChar);
            } else {
                if(typeof callbackFunction === `function`) {
                    callbackFunction(prevState => prevState + 1);
                }
            }
        }
    }, [placeholder, activate])

    return (
        <span className={`${activate ? "typing" : "typed"}`}>
            {placeholder}
        </span>
    )
}