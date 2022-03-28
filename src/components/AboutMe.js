import {useLayoutEffect, useRef, useState} from "react";
import JavascriptLogo from '../assets/Javascript512.png';
import CSSLogo from '../assets/CSS3256.png';
import HTMLLogo from '../assets/HTML5256.png';
import ReactLogo from '../assets/React512.png';
import GitHubLogo from '../assets/GitHub120.png';



export const AboutMe = () => {
    const [show, doShow] = useState(false);
    const aboutmeRef = useRef(null);
    const skills = [
        {
            title: "Javascript",
            logo: JavascriptLogo,
            alt: "Javascript logo"
        },
        {
            title: "HTML 5",
            logo: HTMLLogo,
            alt: "HTML5 logo"
        },
        {
            title: "CSS 3",
            logo: CSSLogo,
            alt: "CSS 3 logo"
        },
        {
            title: "React",
            logo: ReactLogo,
            alt: "React logo"
        },
        {
            title: "GitHub",
            logo: GitHubLogo,
            alt: "Github logo"
        },
    ]

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
        <div className="aboutme_section" name="aboutme">
            <div className="wrapper">
                <div className="title" ref={aboutmeRef}><h2>About Me</h2></div>
                <div className="text">
                    <h3>I'm an aspiring Front End Developer from Poland</h3>
                    <p>I enjoy solving design tasks and turning ideas into reality. My goal is to constantly improve myself and strive to overcome any challenge.</p>
                    <p>Outside of coding and designing, I spend my time dabbling in electronics and playing team-oriented video games </p>
                </div>
                <div className="skills_group">
                    {skills.map((element, index) => {
                        return (
                            <div key={index} className={`animation_wrapper ${show ? "rollOut" : ""}`}>
                                <div className="skill">
                                    <div className="image">
                                        <img src={element.logo} alt={element.alt}/>
                                    </div>
                                    <div className="title">
                                        <h3>{element.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}