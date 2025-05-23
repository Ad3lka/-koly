import "./app.css";
import { useState } from "react";
import FormInput from "./componets/Forminputs";

const App = () => { 
  const [username,setUsername] = useState("");

  console.log(username);
  return (
    <div className="app">
      <form>
        <FormInput placeholder ="Username" setUsername />
        <FormInput placeholder ="Email"/>
        <FormInput placeholder ="Full Name"/>
        <FormInput placeholder ="else"/>
      </form>
    </div>
  );
}
export default App;