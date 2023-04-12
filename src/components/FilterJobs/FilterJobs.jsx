import React from 'react';
import './FilterJobs.css'

let FilterJobs = (props) => {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value)
    }
    return (
        <div className="filter-area">
            <label for="filter-dropdown">Filter By:</label>
            <select id="filter-dropdown" name="hasApplied" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
            </select>
        </div>
    );
};

export default FilterJobs;
