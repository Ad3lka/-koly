
import "./formInputs.css";

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    return (
       <div className= "formInput">
        <label>{label}</label> 
        
            <input 
         {...inputProps} onChange={onChange} required />
        <span>{errorMessage}</span>
        
        </div>
    );
    }
    export default FormInput;