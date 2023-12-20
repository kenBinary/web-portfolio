import '../styles/project-card.css';
export default function ProjectCard({
    appScreen, projectTitle,
    projectDescription, projectHighlight = false,
    techStack, isLeft = true,
    projectLinks,
}) {
    if (isLeft) {
        return (
            <section className="project-card">
                <img src={appScreen} alt="" />
                <div className='project-info'>
                    <h1>{projectTitle}</h1>
                    <p>{projectDescription}</p>
                    {
                        projectHighlight &&
                        <ul>
                            {projectHighlight.map((highlight, index) => {
                                return <li key={index}>{highlight}</li>;
                            })}
                        </ul>
                    }
                    <div className='tech-stack'>
                        {
                            Object.keys(techStack).map((name, index) => {
                                return (
                                    <div key={index} className='card'>
                                        <img src={techStack[name]} alt={name} />
                                        {name}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='project-actions'>
                        {
                            projectLinks.map((link, index) => {
                                return (
                                    <a key={index} href={link.url} target='_blank'>
                                        <button>
                                            <span>{link.linkName}</span>
                                        </button>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="project-card">
            <div className='project-info'>
                <h1>{projectTitle}</h1>
                <p>{projectDescription}</p>
                {
                    projectHighlight &&
                    <ul>
                        {projectHighlight.map((highlight, index) => {
                            return <li key={index}>{highlight}</li>;
                        })}
                    </ul>
                }
                <div className='tech-stack'>
                    {
                        Object.keys(techStack).map((name, index) => {
                            return (
                                <div key={index} className='card'>
                                    <img src={techStack[name]} alt={name} />
                                    {name}
                                </div>
                            );
                        })
                    }
                </div>
                <div className='project-actions'>
                    {
                        projectLinks.map((link, index) => {
                            return (
                                <a key={index} href={link.url} target='_blank'>
                                    <button>
                                        <span>{link.linkName}</span>
                                    </button>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
            <img src={appScreen} alt="" />
        </section>
    );
}