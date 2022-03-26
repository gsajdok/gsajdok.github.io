import {ConsoleWindow} from "./ConsoleWindow";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";

export const Welcome = () => {
    const [inAnimation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, [])

    return (
        <div className="welcome_section" name="welcome">
            <div className="wrapper">
                <div className="consoleWindowWrapper">
                    <CSSTransition
                        in={inAnimation}
                        timeout={1000}
                        classNames="consoleWindowVisitAnimation">
                        <ConsoleWindow/>
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}