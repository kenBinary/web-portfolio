import '../styles/nav-bar.css';
export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul>
                <li>{`// about`}</li>
                <li>{`// skills`}</li>
                <li>{`// projects`}</li>
                <li>{`// education`}</li>
                <li>{`// contact`}</li>
            </ul>
        </nav>
    );
}