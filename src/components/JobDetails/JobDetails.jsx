import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../../utilities/fakeDB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const JobDetails = () => {
    const detailedJobData = useLoaderData();
  
    const { id } = useParams({});
  
    const [job, setJob] = useState({});
    useEffect(() => {
        const jobData = detailedJobData.find(job => job.id == id);
        setJob(jobData);
    }, [])
    

    const { jobDescription, jobResponsibility, educationalRequirements, experience, jobTitle, companyAddress, salaryRange, companyPhone, companyEmail } = job;

    //Apply To Job Button Functionality
    const handleApplyNow = id =>{
        addToDb(id);
        toast.success('You have successfully applied to the job!');
    }

    return (
        <div>
            <div className="job-title">
                <h2>Job Details</h2>
            </div>
            <div className='job-details-container'>
                <div className="job-details">
                <ToastContainer />
                    <p><strong>Job Description:</strong> {jobDescription}</p>
                    <p><strong>Job Responsibility:</strong> {jobResponsibility}</p>
                    <p><strong>Educational Requirements:</strong><br /><br /> {educationalRequirements}</p>
                    <p><strong>Experiences:</strong> <br /><br />{experience}</p>
                </div>

                <div>
                    <div className="job-card">
                        <h4>Job Details</h4>
                        <hr />
                        <p><FontAwesomeIcon icon={faSackDollar} />  <strong>Salary:</strong> {salaryRange} (Per Month)</p>
                        <p><FontAwesomeIcon icon={faCalendar} />  <strong>Job Title:</strong> {jobTitle}</p>
                        <h4>Contact Information</h4>
                        <hr />
                        <p><FontAwesomeIcon icon={faPhone} />  <strong>Phone:</strong> {companyPhone}</p>
                        <p><FontAwesomeIcon icon={faMailBulk} />  <strong>Email:</strong> {companyEmail}</p>
                        <p><FontAwesomeIcon icon={faAddressBook} />  <strong>Address:</strong> {companyAddress}</p>
                    </div>
                    <button onClick={() => handleApplyNow(id)} className='all-jobs-button'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;