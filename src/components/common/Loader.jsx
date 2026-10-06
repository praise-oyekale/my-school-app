import "../common/loader.css"

export default function Loader({ text }) {
    return(
        <div className="loader-container">
            <span className="loader"></span>
            <p>{text}</p>
            
        </div>
    )
}