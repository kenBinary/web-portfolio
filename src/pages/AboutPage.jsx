import '../styles/about-page.css';
import resumeLogo from '/resume.png';
import facebookLogo from '/facebook.png';
import githubLogo from '/github.png';
import linkedinLogo from '/linkedin.png';
import profileImage from '/coding-guy.png';


export default function AboutPage() {
    return (
        <section id='about' className="about-page">
            <div className='about-description'>
                <p id='intro'>{`Hello, I'm`}</p>
                <h1 id='name'>Kenneth Becaro,</h1>
                <p id='description'>
                    <span>
                        Fullstack Developer —
                    </span>
                    {' '}Passionate in this field, I am equipped with skills that enable me to
                    solve real-world problems, transforming ideas into software solutions.
                </p>
                <button id='resume-button'>
                    <span>
                        <img src={resumeLogo} alt="" />
                        <span>Download Resume</span>
                    </span>
                </button>
                <div id='social-links'>
                    <a href="https://github.com/kenBinary" target='_blank'>
                        <button>
                            <span>
                                <img src={githubLogo} alt="" />
                                Github
                            </span>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kjbdev/" target='_blank'>
                        <button>
                            <span>
                                <img src={linkedinLogo} alt="" />
                                Linkedin
                            </span>
                        </button>
                    </a>
                    <a href="https://www.facebook.com/kjbDev/" target='_blank'>
                        <button>
                            <span>
                                <img src={facebookLogo} alt="" />
                                Facebook
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='about-card'>
                <div id='card'>
                    <div id='card-overlay'>
                        <img src={profileImage} alt="" />
                    </div>
                    <div id='card-outline'></div>
                </div>
            </div>
        </section>
    );
}