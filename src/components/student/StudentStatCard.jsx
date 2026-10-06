
import "../student/studentstatcard.css"

export default function StudentStatCard({icon, text, digit}) {
    return(
        <div className="studentstatcard-container">
            <span>{icon} </span>
            <h1>{digit}</h1>
            <p>{text}</p>
        </div>
    )
}