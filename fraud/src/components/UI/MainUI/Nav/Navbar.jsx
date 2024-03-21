import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <img src="\src\assets\icons\logoo.png" alt="logo" id="logo" />
      <div className="linkWrapper">
        <Link to="/services" className="navLinks" href="#" id="services">
          Services
        </Link>
        <Link to="/factors" className="navLinks" href="#">
          Factors{" "}
        </Link>
        <div className="profile-icon">
          <img src="\src\assets\icons\userr.png" alt="user" id="icon" />

          <div className="options">
            <ul>
              <li>
                {" "}
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/Settings">Settings</Link>
              </li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
