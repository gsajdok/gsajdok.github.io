import {useEffect, useState} from "react";
import {RoundBar} from "./Decorations";

export const ConsoleWindow = () => {
    const [currentLocation, setLocation] = useState(["src", "components"]);

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
                        <li><RoundBar color="green" width="1rem"/></li>
                        <li><RoundBar color="red" width="4rem"/></li>
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
                    <div className="folder order-1"><RoundBar color="blue" width="5rem"/></div>
                    <div className="folder order-1"><RoundBar color="yellow" width="2rem"/></div>
                    <div className="folder order-1 highlight"><RoundBar color="green" width="1rem"/></div>
                    <div className="folder order-2 highlight"><RoundBar color="red" width="4rem"/></div>
                    <div className="file order-3 active">Welcome.js</div>
                    <div className="file order-3"><RoundBar color="white" width="4rem"/></div>
                    <div className="file order-3"><RoundBar color="white" width="2rem"/></div>
                    <div className="photo order-3"><RoundBar color="white" width="6rem"/></div>
                </div>
            </div>
            <div className="content">
                <div className="code">
                    <div className="rowCounter">
                        {Array.from(Array(40)).map((element, index) => (
                            <div className="rowCounter_element">{index}</div>
                        ))}
                    </div>
                    <div className="text">
                        <p>My name is <b>Grzegorz Sajdok</b></p>
                        <p>I'm a graduate of Rzeszów University of Technology with specialisation in Avionics</p>
                        <p>After finishing the studies I've been exploring my love towards programming and design</p>
                        <p>Today, I'm working on achieving new successes in the field of <b>Front End Development</b></p>
                    </div>
                </div>
            </div>
            <div className="bottomBar">
                <div className="credits">Grzegorz Sajdok, 2022</div>
            </div>
        </div>
    )
}