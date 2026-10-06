import "../common/welcome.css";
import mySchoolLogo from "../../assets/images/smslogo.png"
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="login-welcome">
      <Link to="/"><img src={mySchoolLogo} alt="logo" style={{width: '80px', background: 'white', borderRadius: '30%'}}/></Link>
      <h1>
        One System Every <span style={{ color: "#E1B153" }}>School role </span>
      </h1>
      <p style={{ marginTop: "20px" }}>
        Students learn. Teachers manage. Administrators lead
      </p>
      <div className="loginwelcome-rolebased">
        <h4>Role-based access</h4>
        <p style={{marginTop: '10px'}}>
          Each user sees only the tools and data relevant to their
          responsibilities
        </p>
      </div>
    </div>
  );
}
export default Welcome;
