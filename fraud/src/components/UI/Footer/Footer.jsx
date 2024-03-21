import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  // Example data for the footer
  const footerData = {
    heading: "PRAYATNA",
    columns: [
      {
        title: "Shivam Chouhan",
        content: "Backend",
      },
      {
        title: "Mruthunjay Pamar",
        content: "Front-end",
      },
      {
        title: "Dimple Kundu",
        content: "ML Model",
      },
      {
        title: "Divyanshu Khatri",
        content: "ML model"
      }
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-heading">{footerData.heading}</div>
      <div className="footer-columns">
        {footerData.columns.map((column, index) => (
          <div className="footer-column" key={index}>
            <h4>{column.title}</h4>
            <p>{column.content}</p>
          </div>
        ))}
      </div>
      <div className="footer-location">{footerData.officeLocation}</div>
      <div className="footer-social-icons">
        <img
          src="\src\assets\icons\facebook.png"
          alt="facebook"
          className="sicons"
        />
        <img
          src="\src\assets\icons\instagram.png"
          alt="insta"
          className="sicons"
        />
        <img
          src="\src\assets\icons\twitter_5969020.png"
          alt="twitter-x"
          className="sicons"
        />
        <Link to="/mainui" >Login</Link>
      </div>
    </footer>
  );
}

export default Footer;
