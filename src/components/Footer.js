import GitHubIcon from '../assets/GitHub64.png'
import LinkedInIcon from '../assets/LinkedIn64.png';

export const Footer = () => {
    return (
        <div className="footer_section">
            <div className="icons">
                <div className="linkedin"><a href="https://www.linkedin.com/in/grzegorz-sajdok/"><img src={LinkedInIcon} alt=""/></a></div>
                <div className="github"><a href="https://github.com/gsajdok"><img src={GitHubIcon} alt=""/></a></div>
            </div>
        </div>
    )
}