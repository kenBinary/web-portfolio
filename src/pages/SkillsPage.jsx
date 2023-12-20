import TechCard from '../components/TechCard';
import '../styles/skills-page.css';
import { techLogos } from './utils/techLogos';

export default function SkillsPage() {
    return (
        <section id='skills' className='skills-page'>
            <h2>Technologies</h2>
            <section className='tech-section'>
                <h3>Languages</h3>
                <div className='cards'>
                    <TechCard name={'html'} image={techLogos.htmlLogo}></TechCard>
                    <TechCard name={'php'} image={techLogos.phpLogo}></TechCard>
                    <TechCard name={'css'} image={techLogos.cssLogo}></TechCard>
                    <TechCard name={'javascript'} image={techLogos.javascriptLogo}></TechCard>
                    <TechCard name={'python'} image={techLogos.pythonLogo}></TechCard>
                    <TechCard name={'java'} image={techLogos.javaLogo}></TechCard>
                    <TechCard name={'dart'} image={techLogos.dartLogo}></TechCard>
                </div>
            </section>
            <section className='tech-section'>
                <h3>Frameworks and libraries</h3>
                <div className='cards'>
                    <TechCard name={'node.js'} image={techLogos.nodeLogo}></TechCard>
                    <TechCard name={'express.js'} image={techLogos.expressLogo}></TechCard>
                    <TechCard name={'react'} image={techLogos.reactLogo}></TechCard>
                    <TechCard name={'passport.js'} image={techLogos.passportLogo}></TechCard>
                    <TechCard name={'flutter'} image={techLogos.flutterLogo}></TechCard>
                </div>
            </section>
            <section className='tech-section'>
                <h3>Databases</h3>
                <div className='cards'>
                    <TechCard name={'mongoDB'} image={techLogos.mongodbLogo}></TechCard>
                    <TechCard name={'mariaDB'} image={techLogos.mariadbLogo}></TechCard>
                </div>
            </section>
            <section className='tech-section'>
                <h3>Dev Tools</h3>
                <div className='cards'>
                    <TechCard name={'git'} image={techLogos.gitLogo}></TechCard>
                    <TechCard name={'curl'} image={techLogos.curlLogo}></TechCard>
                </div>
            </section>
        </section>
    );
}