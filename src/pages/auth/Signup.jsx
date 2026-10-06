import { Link } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import Welcome from "../../components/common/WelcomeLogin";
import "../auth/signup.css";


function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-contents">
        <Welcome />

        <div className="signup-details">
          <h1>Welcome back</h1>
          <p>sign up to continue to your school portal</p>
          <SignupForm />
          <p>Already have an account? {" "}<Link to="/login" style={{textDecoration: "none", fontSize: "17px", fontWeight: 'bold'}}>Log in</Link> </p>
        </div>

        
      </div>
    </div>
  );
}

export default Signup;
