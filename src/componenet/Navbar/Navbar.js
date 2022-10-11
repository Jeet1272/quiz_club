import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div>
                <h1>Quiz Club</h1>
            </div>
            <div className='nav-link'>
                <Link to='/home'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;