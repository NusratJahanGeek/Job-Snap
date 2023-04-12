import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className='top-bar'>
        <NavLink exact to="/" activeClassName="active"><h2>JobSnap</h2></NavLink>
        <div className='top-bar-link-items'>
          <NavLink to="/statistics" activeClassName="active">Statistics</NavLink>
          <NavLink to="/applied" activeClassName="active">Applied Jobs</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </div>
        <a href='/#featured-jobs'>
          <button className='apply-button'>Start Applying</button></a>

      </div>
    </nav>
  );
};

export default Header;
