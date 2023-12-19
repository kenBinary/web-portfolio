import '../styles/cursor.css';
export default function CustomCursor({ coordinates }) {

    return (
        <div className='my-cursor' style={{
            left: `${coordinates.x - 12}px`,
            top: `${coordinates.y - 12}px`,
        }}>
            <div>
            </div>
        </div>
    );
}