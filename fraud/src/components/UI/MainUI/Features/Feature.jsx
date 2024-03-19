import { useState } from "react";
import "./feature.css";

function Feature() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
  <div className="mainfeature">
        <div className="feature-page">
          <h1>Dynamic Feature Page</h1>
          <div className={`feature-content ${isActive ? "active" : ""}`}>
            <p>
              This is a dynamically generated feature page. Click the button to see the content.
            </p>
          </div>
          <button onClick={toggleActive} className="toggle-button">
            {isActive ? "Hide Content" : "Show Content"}
          </button>
        </div>
  </div>
  );
}

export default Feature;
