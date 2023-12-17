import TechCard from '../components/TechCard';
import '../styles/skills-page.css';
import nodeLogo from '/tech-logos/nodejs.svg';

export default function SkillsPage() {
    return (
        <section className='skills-page'>
            <h2>Tech I use</h2>
            <section className='tech-section'>
                <h3>Languages</h3>
                <div className='cards'>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                </div>
            </section>
            <section className='tech-section'>
                <h3>Frameworks and libraries</h3>
                <div className='cards'>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>

                </div>
            </section>
            <section className='tech-section'>
                <h3>Databases</h3>
                <div className='cards'>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>

                </div>
            </section>
            <section className='tech-section'>
                <h3>Dev Tools</h3>
                <div className='cards'>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                    <TechCard name={'node'} image={nodeLogo}></TechCard>
                </div>
            </section>
        </section>
    );
}