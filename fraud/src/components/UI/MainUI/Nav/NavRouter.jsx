import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Settings from "../Navbar/User/Settings"

const NavRouter = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate("/settings"); // Programmatic navigation to settings
  };

  return (
    <Router>
      <Navbar>
        <Link to="/">Profile</Link>
        <button onClick={handleSettingsClick}>Settings</button> {/* Button for settings */}
        <Link to="/help">Help</Link>
      </Navbar>
      <Routes>
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router>
  );
};

export default NavRouter;
