import { useState } from 'react';
import '../styles/nav-bar.css';
export default function NavBar() {
    let initialState = {
        'about': false,
        'skills': false,
        'projects': false,
        'education': false,
        'contact': false,
    };
    let [currentPage, setCurrentPage] = useState({
        'about': true,
        'skills': false,
        'projects': false,
        'education': false,
        'contact': false,
    });
    return (
        <nav className='nav-bar'>
            <ul>
                <a href="/#about">
                    <li className={(currentPage['about']) ? 'clicked' : ''} onClick={() => {
                        setCurrentPage({
                            ...initialState,
                            'about': true,
                        });
                    }}>{`// about`}</li>
                </a>
                <a href="/#skills">
                    <li className={(currentPage['skills']) ? 'clicked' : ''} onClick={() => {
                        setCurrentPage({
                            ...initialState,
                            'skills': true,
                        });
                    }}>{`// skills`}</li>
                </a>
                <a href="/#projects">
                    <li className={(currentPage['projects']) ? 'clicked' : ''} onClick={() => {
                        setCurrentPage({
                            ...initialState,
                            'projects': true,
                        });
                    }}>{`// projects`}</li>
                </a>
                <a href="/#education">
                    <li className={(currentPage['education']) ? 'clicked' : ''} onClick={() => {
                        setCurrentPage({
                            ...initialState,
                            'education': true,
                        });
                    }}>{`// education`}</li>
                </a>
                <a href="/#contact">
                    <li className={(currentPage['contact']) ? 'clicked' : ''} onClick={() => {
                        setCurrentPage({
                            ...initialState,
                            'contact': true,
                        });
                    }}>{`// contact`}</li>
                </a>
            </ul>
        </nav>
    );
}