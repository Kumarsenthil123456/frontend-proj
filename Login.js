import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake auth (demo)
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      navigate("/jobs");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card fade-in" onSubmit={handleLogin}>
        <h1 className="login-title slide-down">Welcome Back 👋</h1>
        <p className="login-subtitle slide-up">
          Login to continue your job search
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-footer">
          Demo login – any email & password will work
        </p>
      </form>
    </div>
  );
};

export default Login;

