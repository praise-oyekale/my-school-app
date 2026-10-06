import "../common/input.css"
function Input({label, type = "text", name, placeholder, value, onChange, error}) {
    return(
        <div className="input-group">
            <label htmlFor={name} >{label}</label>
            <input  type={type} id={name} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="input-error">{error}</p>}
        </div>
    )
}
export default Input