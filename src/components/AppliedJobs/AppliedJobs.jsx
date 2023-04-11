import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobData from '../AppliedJobData/AppliedJobData';
import './AppliedJobs.css'
const AppliedJobs = () => {
    const { applied } = useLoaderData()

    return (
        <div>
            <div className="job-title">
                <h2>Applied Jobs</h2>
            </div>
            <div className='applied-jobs-container'>
            <h2>{applied.length ? '' : 'You have not applied yet. Start applying first.'}</h2>
            <ul>
                {
                    applied.map(apply => <AppliedJobData
                        key={apply.id}
                        apply={apply}
                    ></AppliedJobData>)
                }
            </ul>
            </div>
        </div>

    );
};

export default AppliedJobs;