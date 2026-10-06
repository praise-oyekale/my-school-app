import '../common/featurecard.css'
function FeatureCard({image, title, description}) {
    return(
        <div className="feature-card">
            <img src={image} alt=""  />

            <div className="feature-card-content">
                
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard