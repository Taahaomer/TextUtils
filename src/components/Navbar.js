import propType from 'prop-types'
import React, {useState}  from 'react'


function Navbar(prop) {


   return (

    <nav className={`navbar navbar-expand-lg navbar-${prop.mode}  bg-${prop.mode}`} style={ {backgroundColor:prop.navBg} } >
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"  >Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/"  >Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/" >Action</a></li>
                        <li><a className="dropdown-item" href="/" >Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/" > Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true" >Disabled</a>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search"  placeholder={prop.me} aria-label="Search" />
                    <button className="btn btn-primary" type="submit" >search</button>
                </form> style={navTheme} onClick={toggleNav} */}
                
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
