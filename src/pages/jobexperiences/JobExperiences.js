import { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import PageNotFound from "../PageNotFound";
import "../../styles/jobexperiencesstyles/jobexperiences.css";

// Setting-up the API as value for the variable "url"
const url = "https://course-api.com/react-tabs-project";

// Component to display each job's company name in a button
const JobDescription = ({ jobs, jobPreview, firstJob }) => {
  return (
    <nav className="combtn-container">
      {jobs.map((job) => {
        let btnstyle;
        if (job.company === "TOMMY" && firstJob) {
          btnstyle = {
            borderBottom: "2px solid #53b8bb",
          };
        }

        return (
          <button
            style={btnstyle}
            key={job.id}
            onClick={() => jobPreview(job.company)}
            className="company-btn"
          >
            {job.company}
          </button>
        );
      })}
    </nav>
  );
};

// Job experiences main component
const JobExperiences = () => {
  const [jobs, setJobs] = useState([]);
  const [seljob, setSelJob] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, isError] = useState(false);
  const [firstJob, setFirstJob] = useState(true);

  // Fetching the jobs data from the API
  const getJobs = async () => {
    try {
      const response = await fetch(url);
      const joblist = await response.json();
      setJobs(joblist);
      setSelJob(joblist[0]);
      isLoading(false);
    } catch (error) {
      isError(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getJobs();
  }, []);

  // Conditional expression to display status of data being fetch
  if (loading) {
    if (error) {
      return <PageNotFound />;
    }
    return (
      <div className="jobs-container">
        <BackButton />
        <h1>Loading...</h1>
      </div>
    );
  }

  // Function to determine which job to display
  const jobPreview = (company) => {
    const title = jobs.filter((job) => job.company === company);
    setSelJob(title[0]);
    setFirstJob(false);
  };

  return (
    <section className="jobs-container">
      <BackButton />
      <h1 className="page-title">Job Experience</h1>
      <JobDescription jobs={jobs} jobPreview={jobPreview} firstJob={firstJob} />
      <div className="job-holder">
        <h2 className="job-title">{seljob.title}</h2>
        <h3 className="job-date">{seljob.dates}</h3>
        <p className="job-duty">{seljob.duties}</p>
      </div>
    </section>
  );
};

export default JobExperiences;
