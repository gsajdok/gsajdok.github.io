import {useLayoutEffect, useRef, useState} from "react";

export const AboutMe = () => {
    const [show, doShow] = useState(false);
    const aboutmeRef = useRef(null);

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        const aboutMePos = topPos(aboutmeRef.current);

        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            if(aboutMePos < scrollPosition) {
                doShow(true);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <div className={`aboutme_section ${show ? "fadeOut" : ""}`} name="aboutme">
            <div className="wrapper">
                <div className="title" ref={aboutmeRef}><h2>About Me</h2></div>
                <div className="text">
                    <h3>I'm an aspiring Front End Developer from Poland</h3>
                    <p>I enjoy solving design tasks and turning ideas into reality. My goal is to constantly improve myself and strive to overcome any challenge.</p>
                    <p>Outside of coding and designing, I spend my time dabbling in electronics and playing team-oriented video games </p>
                </div>
            </div>
        </div>
    )
}