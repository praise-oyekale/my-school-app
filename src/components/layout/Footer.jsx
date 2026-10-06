import "../layout/footer.css";
import mySchoolLogo from "../../assets/images/smslogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="footer-first">
          <div className="footer-first-first">
            <img src={mySchoolLogo} alt="footer-logo" className="footer-logo" />
            <p>
              A centralized platform connecting students, teachers and
              administrators — making everyday school activities easier to
              manage.
            </p>
          </div>

          <div className="footer-first-second">
            <h4>PLATFORM</h4>
            <p>Admin Login</p>
            <p>Teacher Login</p>
            <p>Parent Login</p>
          </div>
          <div className="footer-first-third">
            <h4>COMPANY</h4>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="footer-first-third">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>

        <div className="footer-second">
            <div className="footer-second-divisor"></div>
            <div className="footer-second-texts">
                <p>© 2026 EDUCORE School Management Platform</p>
                <p>Built with ❤️ for education in Africa</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
