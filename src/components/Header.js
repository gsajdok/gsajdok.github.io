import {Link, scroll, scroller} from "react-scroll";

export const Header = () => {
    return (
        <div className="header_section">
            <h1>gsajdok.github.io</h1>
            <nav>
                <ul>
                    <li><Link activeClass="active" to="welcome" spy={true} smooth={true} duration={500} >welcome</Link></li>
                    <li><Link activeClass="active" to="aboutme" spy={true} smooth={true} duration={500} >about me</Link></li>
                    <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >projects</Link></li>
                </ul>
            </nav>
        </div>
    )
}