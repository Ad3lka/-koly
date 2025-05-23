import "./app.css";
import {useState } from "react";
import FormInput from "./componets/Forminputs";

const App = () => { 
  const [values,setValues] = useState({ 
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs= [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: " Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username", 
      // required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: " It should be a valid email address!",
      label: "Email", 
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",

      label: "Birthday", 
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: " Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!", 
      label: "Password",  
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: " Passwords don't match!",
      label: "ConfirmPassword",  
    },
    
  
  ];
   


  console.log("re-rendered");
  const handleSubmit = (e) => {
    e.preventDefault();

  
  };

  const onChange = (e)=> {
    setValues({...values,[e.target.name]: e.target.value});
  }
console.log(values);
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => ( 
        <FormInput 
        key={input.id} {...input}
        value={values[input.name]}
        onChange={onChange}/>
    ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;