import "../common/alert.css";

export function Alert({ message }) {
  if (!message) return null;
  return (
    <div className="error-banner-container">
      <div className="error-alert">
        <span>!</span>
        <p>{message}</p>    
      </div>
    </div>
  );
}
