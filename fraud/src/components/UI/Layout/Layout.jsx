import Layout2 from "./Layout2";
import "./layout.css";

import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Demo from "../../API/Demo";
function Layout() {
  return (
    <div>
      <div className="layoutwrapper">
        <div className="layoutMain">
          <h2>Code Buffs</h2>
          <p>
            Securing your financial future:
            <br /> Our machine learning model detects and <br />
            prevents fraudulent transactions in real-time,
            <br /> safeguarding your funds with every transaction
          </p>
          <div className="frontlog">
            <div className="frontloga">
              <img src="\src\assets\icons\google.png" alt="" />
              <a href="">Register with Google</a>
            </div>
            <div className="frontloga">
              <img src="\src\assets\icons\email.png" alt="" />
              <a href="">Register with Email</a>
            </div>
          </div>
        </div>
        <img src="src\assets\icons\layout.png" alt="hfjdlks" />

        <Login />
      </div>
      <Layout2 />
      <Footer />
      <Demo />
    </div>
  );
}

export default Layout;
