function JobCard({ job, onSave }) {
  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{job.title}</h3>
      <p>{job.body}</p>
      <button onClick={() => onSave(job)}>Save Job</button>
      <button style={{ marginLeft: 10 }}>Apply</button>
    </div>
  );
}

export default JobCard;
