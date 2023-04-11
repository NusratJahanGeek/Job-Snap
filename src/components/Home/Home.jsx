import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const Home = () => {
    return (
        <div className='homepage-style'>
            <div className="hero-section">
                <div>
                    <h1>
                        One Step Closer To Your <span className='blue-text'>Dream Job</span>
                    </h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='apply-button'>Get Started</button>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/modern-stylish-muslim-woman-hijab-business-style-jacket-black-abaya-walking-city-street-with-laptop_285396-9497.jpg" alt="" />
                </div>
            </div>

            {/* Job Category List */}

            <div className='section-title'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

            <div className="category-list">
            <div class='individual-category-list'>
                <FontAwesomeIcon className='icon-color' icon={faChartColumn} />
                <h4>Account & Finance</h4>
                <p><small>300 Jobs Available</small></p>
            </div>
            <div class='individual-category-list'>
                <FontAwesomeIcon className='icon-color' icon={faLightbulb} />
                <h4>Creative Design</h4>
                <p><small>100+ Jobs Available</small></p>
            </div>
            <div class='individual-category-list'>
                <FontAwesomeIcon className='icon-color' icon={faFunnelDollar} />
                <h4>Marketing & Sales</h4>
                <p><small>150 Jobs Available</small></p>
            </div>
            <div class='individual-category-list'>
                <FontAwesomeIcon className='icon-color' icon={faDatabase} />
                <h4>Engineering Job</h4>
                <p><small>224 Jobs Available</small></p>
            </div>
            </div>

             {/* Featured Jobs List */}
             
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;