import ProjectCard from '../components/ProjectCard';
import '../styles/project-page.css';
export default function ProjectPage() {
    return (
        <section className="project-section">
            <h1>Projects</h1>
            <section className='project-list'>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </section>
        </section>
    );
}