import { getAppliedJob } from "../../utilities/fakeDB";

const totalAppliedJobsData = async () => {
  try {
    const jobData = await fetch('joblistings.json');
    const jobs = await jobData.json();

    const appliedAlready = getAppliedJob();

    let applied = [];

    for (const id in appliedAlready) {
      const foundApplied = jobs.find(job => job.id === parseInt(id));

      if (foundApplied) {
        foundApplied.quantity = appliedAlready[id];
        applied.push(foundApplied);
      }
    }

    return {applied};
  } catch (error) {
    console.error(error);
  }
}

export default totalAppliedJobsData;
