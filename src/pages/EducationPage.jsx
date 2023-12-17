import EducationCard from '../components/EducationCard';
import '../styles/education-page.css';
export default function EducationPage() {

    return (
        <section className="education-section">
            <h1>Education</h1>
            <div className='education'>
                <EducationCard
                    alignment={'start'}
                    university={'University Of Mindanao (2021-2025)'}
                    degree={'Bachelor of Science in Computer Science'}
                    address={'Davao City, Philippines'}
                ></EducationCard>
                <EducationCard
                    alignment={'end'}
                    university={'STI malaybalay (2019-2021)'}
                    degree={'IT in mobile app and web development'}
                    address={'Malaybalay City, Philippines'}
                ></EducationCard>
            </div>
        </section>
    );
}