import { NavLink, useNavigate } from "react-router-dom";
import schoollogo from "../../assets/images/smslogo.png";
import "../layout/sidebar.css";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { LogOutUser } from "../../services/authService";
export function Sidebar({ sections, sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate()

 async function handleSignout(){
    await LogOutUser();

    navigate("/login")
  }

  return (
    <div className={`sidebar-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <img src={schoollogo} alt="schoollogo" className="sidebar-headerlogo" />
        <div className="sidebar-headername">
          <h2>EduCore</h2>
          <p>His Grace International</p>
        </div>

        {sidebarOpen && (
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        )}
      </div>
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <div className="sidebar-section" key={section.title}>
            <h4>{section.title}</h4>

            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  isActive ? "sidebar-link active " : "sidebar-link "
                }
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="signout-section" onClick={handleSignout}>
          <FaSignOutAlt />
          <span>SignOut</span>
        </div>
      </div>
    </div>
  );
}
