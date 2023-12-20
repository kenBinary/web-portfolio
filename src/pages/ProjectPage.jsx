import ProjectCard from '../components/ProjectCard';
import '../styles/project-page.css';
import fitsterDemo from '/device-mockups/fitster-gif-demo.gif';
import bhDemo from '/device-mockups/bh-management-demo.gif';
import { techLogos } from './utils/techLogos';
export default function ProjectPage() {
    const description1 = "Android app made as a final project requirement for my mobile app development class, made with flutter and integrated with firebase.";
    const techStack1 = {
        'dart': techLogos.dartLogo,
        'flutter': techLogos.flutterLogo,
        'firebase': techLogos.firebaseLogo
    };
    const projectLinks1 = [
        {
            'url': 'https://github.com/kenBinary/fitster',
            'linkName': 'Source Code'
        },
        {
            'url': 'https://drive.google.com/file/d/1fkaShcRfxR6buHSedYqMQ5J_ukG23piI/view?usp=sharing',
            'linkName': 'apk file'
        },
    ];

    const description2 = "Web app that allows a landlord to efficiently manage their boarding house. SPA with express backend.";
    const techStack2 = {
        'react': techLogos.reactLogo,
        'express': techLogos.expressLogo,
        'mariaDB': techLogos.mariadbLogo
    };
    const projectHighlight2 = ['database normalized up to 3rd normal form', 'database has views,procedures and transactions', 'REST api'];
    const projectLinks2 = [
        {
            'url': 'https://github.com/kenBinary/bh-management-frontend',
            'linkName': 'Source Code'
        },
        {
            'url': 'https://github.com/kenBinary/fitster',
            'linkName': 'Live Demo'
        },
    ];
    return (
        <section id='projects' className="project-section">
            <h1>Projects</h1>
            <section className='project-list'>
                <ProjectCard
                    appScreen={fitsterDemo} projectTitle={'Fitster'}
                    projectDescription={description1} techStack={techStack1}
                    projectLinks={projectLinks1}
                ></ProjectCard>
                <ProjectCard
                    appScreen={bhDemo} projectTitle={'Boarding House Management System'}
                    projectDescription={description2} projectHighlight={projectHighlight2}
                    techStack={techStack2} isLeft={false}
                    projectLinks={projectLinks2}
                ></ProjectCard>
            </section>
        </section>
    );
}