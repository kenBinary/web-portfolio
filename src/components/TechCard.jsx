export default function TechCard({ name, image }) {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <span>{name}</span>
        </div>
    );
}