export default function TechCard({ name, image }) {
    return (
        <div className='card'>
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <span>{name}</span>
        </div>
    );
}