import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn && <LoginPage onLogin={handleLogin} />}
      {isLoggedIn && <MainUI />}
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and authentication
    onLogin();
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className={`login-page ${showLogin ? "visible" : ""}`}>
      <div className="login-box">
        <span className="close" onClick={handleClose}>
          ×
        </span>
        <h1>Login or Sign Up</h1>
        <img src="" alt="" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" >
            <Link to="/mainui" >Login</Link>
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/mainui">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
