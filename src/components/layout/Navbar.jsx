import "../layout/navbar.css";
import mySchoolLogo from "../../assets/images/smslogo.png"
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <div className="nav-container">
            <img src={mySchoolLogo} alt="nav-logo" className="nav-logo" />
            <div className="nav-features-container">
                <h3 className="nav-feature-text">Features</h3>
                <h3 className="nav-contact-text">Contacts</h3>
            </div>
            <div className="nav-buttons">
                <button className="nav-signup"> <Link to="/signup" style={{textDecoration: 'none', color: '#d89522', fontWeight: 'bold',}}>Sign Up</Link> </button>
                <button className="nav-login"><Link to='/login' style={{textDecoration: 'none' , color: 'var(--color-text)'}}>Login </Link></button>
            </div>
        </div>
    )
}

export default Navbar