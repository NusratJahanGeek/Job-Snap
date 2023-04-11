import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='top-bar'>
                <Link to="/"><h2>JobSnap</h2></Link>
                <div className='top-bar-link-items'>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <button className='apply-button'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;