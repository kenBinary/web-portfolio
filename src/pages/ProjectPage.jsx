import ProjectCard from '../components/ProjectCard';
import '../styles/project-page.css';
import fitsterDemo from '/device-mockups/fitster-gif-demo.gif';
import bhDemo from '/device-mockups/bh-management-demo.gif';
import { techLogos } from './utils/techLogos';
export default function ProjectPage() {
    let description1 = "Android app made as a final project requirement for my mobile app development class, made with flutter and integrated with firebase.";
    let techStack1 = {
        'dart': techLogos.dartLogo,
        'flutter': techLogos.flutterLogo,
        'firebase': techLogos.firebaseLogo
    };
    let description2 = "Web app that allows a landlord to efficiently manage their boarding house. SPA with express backend.";
    let techStack2 = {
        'react': techLogos.reactLogo,
        'express': techLogos.expressLogo,
        'mariaDB': techLogos.mariadbLogo
    };
    let projectHighlight2 = ['database normalized up to 3rd normal form', 'database has views,procedures and transactions', 'REST api'];
    return (
        <section id='projects' className="project-section">
            <h1>Projects</h1>
            <section className='project-list'>
                <ProjectCard
                    appScreen={fitsterDemo} projectTitle={'Fitster'}
                    projectDescription={description1} techStack={techStack1}
                    codeLink={'https://github.com/kenBinary/fitster'} demoLInk={''}
                ></ProjectCard>
                <ProjectCard
                    appScreen={bhDemo} projectTitle={'Boarding House Management System'}
                    projectDescription={description2} projectHighlight={projectHighlight2}
                    techStack={techStack2} codeLink={'https://github.com/kenBinary/fitster'}
                    demoLInk={''} isLeft={false}
                ></ProjectCard>
            </section>
        </section>
    );
}