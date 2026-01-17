import React, { useEffect, useState } from "react";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  const removeJob = (id) => {
    const updated = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 className="saved-title slide-down">❤️ Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p className="no-saved fade-in">
          No saved jobs yet. Save jobs to see them here.
        </p>
      ) : (
        <div className="jobs-grid">
          {savedJobs.map((job, index) => (
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

              <button
                className="remove-btn"
                onClick={() => removeJob(job.id)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;

