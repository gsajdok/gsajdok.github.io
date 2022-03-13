import {useEffect, useState} from "react";

export const ConsoleWindow = () => {
    const [currentLocation, setLocation] = useState(["src", "components"]);
    const menuItems = ["File", "Edit", "View", "Run", "Tools", "Help"];

    return (
        <div className="window">
            <div className="topBar">
                <div className="icon">
                    💪
                </div>
                <nav className="menu">
                    <ol>
                        {menuItems.map((element) => (
                            <li><span>{element}</span></li>
                        ))}
                    </ol>
                </nav>
            </div>
            <div className="navigationBar">
                <div className="location">
                    <ol>
                        <li>gsajdok.github.io</li>
                        {currentLocation.map(element => (
                            <li>{element}</li>
                        ))}
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
                    <div className="folder order-1">node_modules</div>
                    <div className="folder order-1">public</div>
                    <div className="folder order-1">src</div>
                    <div className="folder order-2">components</div>
                    <div className="file order-3">Welcome.js</div>
                    <div className="file order-3">AboutMe.js</div>
                    <div className="file order-3">Projects.js</div>
                    <div className="file order-3">Contact.js</div>
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