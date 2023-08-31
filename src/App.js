import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import  Alert  from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message ,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1250);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is a amazing Mode'
      // }, 2000);  
      // setInterval(() => {
      //   document.title = ' Install TextUtils Now'
      // }, 1500);
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success")
      document.title = 'TextUtils - Light Mode'

    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}  />
        <About/>
      </div>
    </>
  );
}

export default App;
