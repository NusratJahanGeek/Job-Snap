import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobData from '../AppliedJobData/AppliedJobData';
import FilterJobs from '../FilterJobs/FilterJobs';
import './AppliedJobs.css';

const AppliedJobs = () => {
  const { applied } = useLoaderData();

  const [filterType, setFilterType] = useState('all');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const filteredJobs = applied.filter((job) => {
      const features = job.features;
     
      if (filterType === 'all') {
        return true;
      }
      else if (filterType === 'remote' && features.includes('Remote')) {
        return true;
      } else if (filterType === 'onsite' && features.includes('Onsite')) {
        return true;
      }
      return false;
    });
  
    setFilteredJobs(filteredJobs);
  
  }, [applied, filterType]);

  const handleFilter = (filter) => {
    setFilterType(filter.toLowerCase());
  };

  return (
    <div>
      <div className="job-title">
        <h2>Applied Jobs</h2>
      </div>
      <FilterJobs filterValueSelected={handleFilter} />
      <div className="applied-jobs-container">
        {filteredJobs.length > 0 ? (
          <ul>
            {filteredJobs.map((job) => (
              <AppliedJobData key={job.id} apply={job}></AppliedJobData>
            ))}
          </ul>
        ) : (
          <h2>You have not applied yet. Start applying first.</h2>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
