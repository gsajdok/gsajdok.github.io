import {useEffect, useMemo, useRef, useState} from "react";
import {RoundBar} from "./Decorations";
import {Autotyper} from "./Autotyper";

export const ConsoleWindow = () => {
    const [animationStep, setAnimationStep] = useState(0);
    const [delayAnimationStep, setDelayAnimationStep] = useState(animationStep);
    const consoleHeight = useRef(null);


    useEffect( () => {
        setTimeout(() => {
            setDelayAnimationStep(animationStep);
        }, 1000)
    }, [animationStep])

    return (
        <div className="window">
            <div className="topBar">
                <div className="icon">
                    💪
                </div>
                <div className="menu">
                    <ol>
                        {Array.from(Array(5)).map((element, index) => (
                            <li key={index}><RoundBar color="white" width="2rem"/></li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="navigationBar">
                <div className="location">
                    <ol>
                        <li>gsajdok.github.io</li>
                        <li><RoundBar color="white" width="1rem"/></li>
                        <li><RoundBar color="white" width="4rem"/></li>
                    </ol>
                </div>
            </div>
            <div className="leftBarHeader">
                <div className="tab">Project</div>
                <div className="icons">❌</div>
            </div>
            <div className="contentHeader">
                <div className="tab">Welcome.js</div>
            </div>
            <div className="leftBar">
                <div className="tree">
                    <div className="folder order-1"><RoundBar color="white" width="5rem"/></div>
                    <div className="folder order-1"><RoundBar color="white" width="2rem"/></div>
                    <div className="folder order-1 highlight"><RoundBar color="white" width="1rem"/></div>
                    <div className="folder order-2 highlight"><RoundBar color="white" width="4rem"/></div>
                    <div className="file order-3 active">Welcome.js</div>
                    <div className="file order-3"><RoundBar color="white" width="4rem"/></div>
                    <div className="file order-3"><RoundBar color="white" width="2rem"/></div>
                    <div className="file order-3"><RoundBar color="white" width="6rem"/></div>
                </div>
            </div>
            <div className="content">
                <div className="code">
                    <div className="rowCounter">
                        {Array.from(Array(40)).map((element, index) => (
                            <div className="rowCounter_element">{index+1}</div>
                        ))}
                    </div>
                    <div className="text" ref={consoleHeight}>
                        <p><Autotyper
                            text="My name is Grzegorz Sajdok"
                            activate={delayAnimationStep===0}
                            callbackFunction={setAnimationStep} /></p>
                        <p><Autotyper
                            text="I'm a graduate of Rzeszów University of Technology with specialisation in Avionics"
                            activate={delayAnimationStep===1}
                            callbackFunction={setAnimationStep}
                        /></p>
                        <p><Autotyper
                            text="After finishing the studies I've been exploring my love towards programming and design"
                            activate={delayAnimationStep===2}
                            callbackFunction={setAnimationStep}
                        /></p>
                        <p><Autotyper
                            text="Today, I'm working on achieving new successes in the field of Front End Development"
                            activate={delayAnimationStep===3}
                        /></p>
                    </div>
                </div>
            </div>
            <div className="bottomBar">
                <div className="credits">Grzegorz Sajdok, 2022</div>
            </div>
        </div>
    )
}