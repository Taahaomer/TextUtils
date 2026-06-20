import Navbar from './components/navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import './App.css';
import React, { useState } from 'react'

function App() {

      const [mode, setMode] = useState ("light");
      const [navBg,setNavBg] = useState("")

      const toggleMode = () => {
          if (mode === 'light') {
            setMode('dark') ; 
            document.body.style.backgroundColor="grey" ; 
            showAlert("Dark mode enabled", "success") 
            } 
          else { 
            setMode('light') ; 
            document.body.style.backgroundColor="white" ; 
            showAlert("Light mode enabled", "success") }
      }

      const toggleModeR = () => {
                
                setMode("dark")
                document.body.style.backgroundColor="red"
                showAlert("Red mode enabled", "success") 
      }

      const toggleModeG = () => {
                
                setMode("dark")
                document.body.style.backgroundColor="green"
                showAlert("Green mode enabled", "success") 
      }
      

      const toggleModeI = () => {
            
                setMode("dark")
                document.body.style.backgroundColor="#6610f2"
                showAlert("Indigo mode enabled", "success") 
      }
      // const [navColor, setNavColor] = useState("light")
      // function toggleCustom  (palette) {
      //   if(palette==="red"){
      //     document.body.Navbar.style="danger"
      //   }

      // }

      const [alert, setAlert] = useState(null)

      const showAlert = (message, warn) => {
          setAlert({
            warning: warn,
            msg : message
          });

          setTimeout ( () => {setAlert(null)},1000);
        }

  return (
    <>
      <Navbar me="Search here" he="100" mode={mode} navBg={navBg} toggleMode={toggleMode} toggleModeR={toggleModeR} toggleModeG={toggleModeG} toggleModeI={toggleModeI} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
          <TextForm heading="Enter your Text" showAlert={showAlert} mode={mode}/>
      </div>
      <div className="container">
        <About mode={mode}></About>
      </div>
      
    </>
  );
}

export default App;
