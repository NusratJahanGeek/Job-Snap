import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AppliedJobData.css'

const AppliedJobData = ({ apply }) => {
    const { id, companyLogo, companyName, jobTitle, companyLocation, features, salaryRange } = apply
    return (
        <div className='applied-job-data-container'>
            <div>
                <img src={companyLogo} alt="" />
            </div>
            <div>
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
            </div>
            <div>
                <Link to={`/details/${id}`}><button className='apply-button'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobData;