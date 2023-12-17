import '../styles/education-card.css';
import universityIcon from '/school-building.svg';
import degreeIcon from '/graduate-cap.svg';
import addressIcon from '/map-marker.svg';
export default function EducationCard({ alignment, university, degree, address }) {
    function contentAlignment(alignment) {
        return (alignment === 'start') ? 'education-card-start' : 'education-card-end';
    }
    return (
        <div className={'education-card ' + contentAlignment(alignment)}>
            <div>
                <p id='university'>
                    <img src={universityIcon} alt="" />
                    {university}
                </p>
                <p id='degree'>
                    <img src={degreeIcon} alt="" />
                    {degree}
                </p>
                <p id='address'>
                    <img src={addressIcon} alt="" />
                    {address}
                </p>
            </div>
        </div>
    );
}