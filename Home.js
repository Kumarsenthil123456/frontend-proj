import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content fade-in">
        <h1 className="home-title slide-down">
          Find Your <span>Dream Job</span>
        </h1>

        <p className="home-subtitle slide-up">
          Discover opportunities from top companies and build your career.
        </p>

        <div className="home-buttons zoom-in">
          <Link to="/jobs">
            <button className="primary-btn">Browse Jobs</button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


