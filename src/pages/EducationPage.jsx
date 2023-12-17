import EducationCard from '../components/EducationCard';
import '../styles/education-page.css';
export default function EducationPage() {
    return (
        <section className="education-section">
            <h1>Education</h1>
            <div className='education'>
                <EducationCard alignment={'start'}></EducationCard>
                <EducationCard alignment={'end'}></EducationCard>
                <EducationCard alignment={'start'}></EducationCard>
                <EducationCard alignment={'end'}></EducationCard>
            </div>
        </section>
    );
}