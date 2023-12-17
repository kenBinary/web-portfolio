import '../styles/education-card.css';
export default function EducationCard({ alignment }) {
    function contentAlignment(alignment) {
        return (alignment === 'start') ? 'education-card-start' : 'education-card-end';
    }
    return (
        <div className={'education-card ' + contentAlignment(alignment)}>
            <div>
                <p id='university'>University Of Mindanao (2021-2025)</p>
                <p id='degree'>Bachelor Of Science In Computer Science</p>
                <p id='address'>location icon: Davao City, Philippines</p>
            </div>
        </div>
    );
}