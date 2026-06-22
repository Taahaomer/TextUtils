import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

      const [mode, setMode] = useState ("light");


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
    
    <Router>
      
        <Navbar me="Search here" he="100" mode={mode}  toggleMode={toggleMode} toggleModeR={toggleModeR} toggleModeG={toggleModeG} toggleModeI={toggleModeI} />
        <Alert alert={alert}></Alert>
      <Routes>


        <Route exact path="/" element={<div class="container"> 
                                     <TextForm heading="Enter your Text" showAlert={showAlert} mode={mode}/>
                                </div>} />
                                
        <Route exact path="/About" element={<div class="container"> 
                                           <About mode={mode}></About>
                                     </div>} />

      </Routes>

    </Router>
    </>
  );
}

export default App;
