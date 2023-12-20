import '../styles/project-card.css';
export default function ProjectCard({
    appScreen, projectTitle,
    projectDescription, projectHighlight = false,
    techStack, codeLink,
    demoLInk, isLeft = true,
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
                        <a href={codeLink} target='_blank'>
                            <button>
                                <span>Source Code</span>
                            </button>
                        </a>
                        <a href={demoLInk} target='_blank'>
                            <button>
                                <span>Live Demo</span>
                            </button>
                        </a>
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
                    <a href={codeLink} target='_blank'>
                        <button>
                            <span>Source Code</span>
                        </button>
                    </a>
                    <a href={demoLInk} target='_blank'>
                        <button>
                            <span>Live Demo</span>
                        </button>
                    </a>
                </div>
            </div>
            <img src={appScreen} alt="" />
        </section>
    );
}