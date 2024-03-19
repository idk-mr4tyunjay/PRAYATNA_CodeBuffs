import "./footer.css";

function Footer() {
  // Example data for the footer
  const footerData = {
    heading: "PRAYATNA",
    columns: [
      {
        title: "Address",
        content: "123 Street, City, Country",
      },
      {
        title: "Phone",
        content: "+1 234 5678",
      },
      {
        title: "Email",
        content: "info@example.com",
      },
    ],

    officeLocation: "Office Location: 456 Avenue, City, Country",
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
      </div>
    </footer>
  );
}

export default Footer;
