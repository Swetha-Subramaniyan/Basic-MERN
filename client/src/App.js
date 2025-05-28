import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState("");

  console.log("sent a request")
  const handlenamechange = async () => {
    try {  
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/crud/create-name`,
        {name}
      );
      alert("craeted successsfully");
    } catch (error) {
      console.error("Error creating user name:", error);
    }
  };

   const handlecheck = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/crud/check`,
        {name}
      );
      console.log("sahfidu", res)
      alert("craeted successsfully");
    } catch (error) {
      console.error("Error creating user name:", error);
    }
  };


  return (
    <div className="App">
      <label>name</label>
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={handlenamechange}>submit</button>

       <button onClick={handlecheck}>checkkkk</button>
    </div>
  );
}
  
export default App;
