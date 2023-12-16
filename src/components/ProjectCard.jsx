import '../styles/project-card.css';
import phoneMockup from '/device-mockups/phone.png';
import nodeLogo from '/tech-logos/nodejs.svg';


export default function ProjectCard() {
    return (
        <section className="project-card">
            <img src={phoneMockup} alt="" />
            <div className='project-info'>
                <h1>Project Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit quasi nam ex architecto, repudiandae, ratione quam
                    nemo dolor blanditiis, ullam corrupti. Quos inventore
                    soluta eum. Ipsam molestiae voluptatem ipsa consequatur.
                </p>
                <div className='tech-stack'>
                    <div>
                        <img src={nodeLogo} alt="" />
                        React
                    </div>
                    <div>Express</div>
                    <div>Javascript</div>
                </div>
                <div className='project-actions'>
                    <button>
                        <span>Source Code</span>
                    </button>
                    <button>
                        <span>Live Demo</span>
                    </button>
                </div>
            </div>
        </section>
    );

}