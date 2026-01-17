import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: 10 }}>Home</Link>
      <Link to="/jobs" style={{ color: "white", marginRight: 10 }}>Jobs</Link>
      <Link to="/saved" style={{ color: "white", marginRight: 10 }}>Saved</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
