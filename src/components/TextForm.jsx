import React, {useState} from 'react'

export default function TextForm(p) {

    const lowCase = (event) => {
        event.preventDefault();
        let ntext = text.toLowerCase();
        setText (ntext);
        if(text.length>0){
            p.showAlert( "converted to lowerCase" , "success" )
        }
        else{
            p.showAlert( "Enter text to convert" , "warning" )
        }
    }
    const uppCase = (event) => {
        event.preventDefault();
        console.log("button is clicked");
        let ntext = text.toUpperCase();
        setText (ntext);
        if(text.length>0){
            p.showAlert( "converted to upperCase" , "success" )
        }
        else{
            p.showAlert( "Enter text to convert" , "warning" )
        }
    }

    const handleIt = (event) => {
        
        console.log("change");
        setText (event.target.value);
    }

    const [text, setText]= useState("");

    const wordCheck = () => {
          // Splits the text by spaces, tabs, or new line characters
        const wordsArray = text.trim().split(/\s+/); 
        
        // Filters out empty strings (so empty text areas return 0 words)
        return wordsArray[0] === "" ? 0 : wordsArray.length;
    }

    
    
  return (
    <>
        <form>
            <h1 style={{color : p.mode=="light" ? "black" : "white"}}>
                {p.heading}
            </h1>

            <div className="form-group" >
                <textarea  style= {{ backgroundColor: p.mode === "dark" ? 'grey' : 'white', color: p.mode === 'dark' ? 'white' : 'black' } } type="text" onChange={handleIt} value={text} className="form-control my-2 " placeholder="Enter Text" rows="8"/>
            </div>

            <button type="submit" className={`btn btn-${p.mode} my-2 mx-1`} onClick={uppCase}>Convert to upperCase</button>
            <button type="submit" className={`btn btn-${p.mode} my-2 mx-1`} onClick={lowCase}>Convert to lowerCase</button>
        </form>
        <div className={`container text-${p.mode != 'light' ? 'white' : 'black'}`}>
            <h2> Text Summary </h2>
            <p> {wordCheck()} words and {text.length} characters</p>
            <p> {parseFloat((0.008*wordCheck()).toFixed(3))} minutes read</p>
            <h2>Preview</h2>
            <p>{ text.length > 0 ? text : "Enter something to preview"}</p>
        </div>
        
    </>
    
  )
}
