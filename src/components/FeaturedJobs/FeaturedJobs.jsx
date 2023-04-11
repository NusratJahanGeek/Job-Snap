import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobListing from '../JobListing/JobListing';
import './FeaturedJobs.css'

const FeaturedJobs = () => {
    const joblistings = useLoaderData();
    return (
        <div className='homepage-style'>
            <div className='section-title'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

            <div className="featured-jobs-container">
            {
                joblistings.map(joblisting => <JobListing
                    key={joblisting.id}
                    joblisting={joblisting}
                ></JobListing>)
            }
            </div>
            <button className='all-jobs-button'>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;