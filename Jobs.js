import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Dummy jobs data (backend illa)
    const jobData = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TCS",
        location: "Chennai",
        type: "Full Time",
      },
      {
        id: 2,
        title: "React Developer",
        company: "Infosys",
        location: "Bangalore",
        type: "Remote",
      },
      {
        id: 3,
        title: "UI Developer",
        company: "Wipro",
        location: "Hyderabad",
        type: "Full Time",
      },
      {
        id: 4,
        title: "Junior Frontend Engineer",
        company: "Startup Hub",
        location: "Remote",
        type: "Internship",
      },
    ];

    setTimeout(() => {
      setJobs(jobData);
    }, 500); // small animation feel
  }, []);

  return (
    <div className="container">
      <h1 className="jobs-title slide-down">🔥 Available Jobs</h1>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className="job-card fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>

            <div className="job-info">
              <span>📍 {job.location}</span>
              <span>🕒 {job.type}</span>
            </div>

            <div className="job-actions">
              <button className="apply-btn">Apply Now</button>
              <button className="save-btn">♡ Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

