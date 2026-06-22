import propType from 'prop-types'
import React  from 'react'
import {Link} from "react-router-dom"

function Navbar(prop) {


   return (

    <nav className={`navbar navbar-expand-lg navbar-${prop.mode}  bg-${prop.mode}`} style={ {backgroundColor:prop.navBg} } >
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="pt-1">
                    <Link className="nav-item nav-link  active" aria-current="page" to="/"  >Home</Link>
                    </li>
                    <li className="pt-1">
                    <Link className="nav-item nav-link " to="/About "  >About</Link>
                    </li>

                </ul>

                
                <button style = {{height : '18px' , width : '18px' , border : '1px solid black' }} className='bg-danger mx-1' onClick={prop.toggleModeR} ></button>

                <button style = {{height : '18px' , width : '18px' , border : '1px solid black' }} className='bg-success mx-1' onClick={prop.toggleModeG} ></button>
                
                <button style = {{height : '18px' , width : '18px' , border : '1px solid black' , backgroundColor : 'indigo' }} className='mx-1' onClick={prop.toggleModeI} ></button>

                <div class= {` form-check form-switch mx-2 text-${ (prop.mode==="light")? "dark" : "white" }`}   >
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode}  />
                    Enable Dark Mode
                </div>
            </div>
            
        </div>
        
    </nav>
   );
}

export default Navbar;

Navbar.propTypes = {

    me: propType.string,
    he: propType.number

}
