import "./navbar.css";

function Navbar() {
  return (
    <div className="main">
      <div className="main2">
        <img src="" alt="logo" />
        <div className="linkWrapper">
          <a className="navLinks" href="#">Services</a>
          <a className="navLinks" href="#">
            Data Represantation
          </a>
          <a className="navLinks" href="#">
            Past Transaction
          </a>
          <img src="\src\assets\userr.png" alt="user_icon" id="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
