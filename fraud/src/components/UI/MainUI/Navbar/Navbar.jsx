import "./navbar.css";


function Navbar() {
  return (
    <div className="main">
      <img src="\src\assets\icons\logoo.png" alt="logo" id="logo" />
      <div className="linkWrapper">
        <a className="navLinks" href="#">
          Services
        </a>
        <a className="navLinks" href="#">
          Data Representation
        </a>
        <a className="navLinks" href="#">
          Past Transactions
        </a>
        <div className="profile-icon">
          <img src="\src\assets\icons\userr.png" alt="user" id="icon" />

          <div className="options">
            <ul>
              <li>Profile</li>
              <li onClick={handleSettingsClick}>Settings</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Navbar;
