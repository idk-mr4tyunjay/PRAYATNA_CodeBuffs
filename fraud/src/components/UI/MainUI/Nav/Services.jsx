import "./services.css"; // Import the external CSS file

function Services() {
  return (
    <div className="container">
      <h1 className="title">Credit Card Fraud Detection Services</h1>
      <p className="description">
        Our credit card fraud detection service uses machine learning algorithms
        to detect fraudulent transactions and protect your finances.
      </p>
      <div className="wrapxs">
        <div>
          <img src="\src\assets\icons\girl.png" alt="" />
        </div>
        <div className="wrapfd">
          <h2>We Provide</h2>
          <ul className="services-list">
            <li>Real-time fraud detection</li>
            <li>Transaction monitoring and analysis</li>
            <li>Customizable fraud detection rules</li>
            <li>24/7 fraud monitoring and support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
