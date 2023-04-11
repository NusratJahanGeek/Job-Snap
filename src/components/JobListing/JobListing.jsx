import React from 'react';
import './JobListing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const JobListing = ({joblisting}) => {
    const {id, companyLogo, companyName, jobTitle, companyLocation, features, salaryRange} = joblisting;
    return (
        <div className='joblisting-container'>
            <img src={companyLogo} alt="" />
            <h4>{jobTitle}</h4>
            <p>{companyName}</p>
            <p><small><span className='feature-style'>{features[0]}</span> <span className='feature-style'>{features[1]}</span></small></p>
            <div className="location-salary-container">
                <div className="location">
                <p><FontAwesomeIcon icon={faLocationDot} /> {companyLocation}</p>
           
                </div>
                <div className="salary">
                <p><FontAwesomeIcon icon={faSackDollar} />  {salaryRange}</p>
                </div>
            </div>
            <Link to={`/details/${id}`}><button className='apply-button'>View Details</button></Link>
        </div>
    );
};

export default JobListing;