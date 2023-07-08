import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { ToastContainer, toast } from 'react-toastify';
//import About from "./Components/About";

function Apps(){
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:  message,
      type: type
    })
  };
  const toggleMode = () => {
    if (mode === "light") {
      // setMode = 'dark' This is wrong since setMode is constant and the value cannot be altered
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled","success")
    } 
    else {
      //setMode = 'light' Wrong!!!

      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled","success")
    }
  };


  return (
    <>
      <Navbar title="Textutlis" mode={mode} toggleMode={toggleMode} />

    
      

      <div className="container my-5">
        <TextForm
          heading="Welcome to textutilis"
          subHead="Enter text to analyze below"
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

//ctrl + k + c
