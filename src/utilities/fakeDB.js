// Add data to local storage
const addToDb = id => {
    let appliedJob = {};
    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }

    const quantity = appliedJob[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    else {
        appliedJob[id] = 1;
    }

    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
}

// Get Storage Data
const getAppliedJob = () => {
    let appliedJob = {};
    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }

    return appliedJob;
}

export { addToDb, getAppliedJob }

