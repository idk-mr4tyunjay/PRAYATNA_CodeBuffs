import React from 'react';
import './factor.css'; // Import the external CSS file

function Factor() {
  return (
    <div className="factor-container">
      <div className="image-container">
        {/* Your image goes here */}
        <img src="\src\assets\icons\factor.png" alt="Image" />
      </div>
      <div className="factor">
        <h2>Factors for Judging Data</h2>
        <ul>
          <li>
            <strong>IP:</strong> The IP address from which the data is accessed.
          </li>
          <li>
            <strong>OTP Pin code:</strong> The one-time password used for verification.
          </li>
          <li>
            <strong>Device History:</strong> The history of the device used to access the data.
          </li>
          <li>
            <strong>Time:</strong> The timestamp when the data is accessed.
          </li>
          <li>
            <strong>Amount:</strong> The quantity or value associated with the data.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Factor;
