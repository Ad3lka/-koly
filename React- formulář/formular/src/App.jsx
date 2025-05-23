import "./app.css";
import { useRef, useState } from "react";
import FormInput from "./componets/Forminputs";

const App = () => { 
  //const [username,setUsername] = useState("");
   


  console.log("re-rendered");
  const handleSubmit = (e) => {
    e.preventDefault();
  const data =new FormData(e.target);

  console.log (data)
  };

  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name= "username" placeholder="Username"/>
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <FormInput name="else" placeholder="else" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;