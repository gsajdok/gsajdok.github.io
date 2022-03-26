import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

export const Projects = () => {
    const Projects = [
        {
            id: 1,
          image: project1,
          name: "Personal page",
          description: "My own personal page. You are here!",
          link: "https://github.com/gsajdok/gsajdok.github.io"
        },
        {
            id: 2,
            image: project2,
            name: "Oddam w dobre rece",
            description: "Page for an item sharing service, using Firebase auth and database",
            link: "https://github.com/gsajdok/oddam_w_dobre_rece_project"
        }
    ];

    return (
        <div className="projects_section" name="projects">
            <div className="wrapper">
                <div className="title"><h2>Projects</h2></div>
                <div className="projects_container">
                    {Projects.map(element => {
                        return (
                            <div className="project" key={element.id}>
                                <div className="project_image"><img src={element.image} alt=""/></div>
                                <div className="project_text">
                                    <div className="project_name">{element.name}</div>
                                    <div className="project_description">{element.description}</div>
                                    <div className="project_button"><a href={element.link}>Go to Github</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}