import '../styles/education-card.css';
export default function EducationCard({ alignment }) {
    function contentAlignment(alignment) {
        return (alignment === 'start') ? 'education-card-start' : 'education-card-end';
    }
    return (
        <div className={'education-card ' + contentAlignment(alignment)}>
            <p>University Of Mindanao (2021-2025)</p>
            <p>Bachelor Of Science In Computer Science</p>
            <p>location icon: Davao City, Philippines</p>
        </div>
    );
}