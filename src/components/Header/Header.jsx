import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/details">Job Details</Link>
            <Link to="/applied">Applied Jobs</Link>
        </nav>
    );
};

export default Header;