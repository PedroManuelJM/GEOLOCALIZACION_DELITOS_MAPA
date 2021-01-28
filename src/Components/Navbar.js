import React from 'react';
import icon from '../assets/alerta.ico';
function Navbar() {
    return (
    <nav id="nav-color" className="navbar navbar-light bg-info fixed-top ">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img id="logo" src={icon} alt="" width="48" height="48" className="d-inline-block align-top margen logo" style={{marginTop:"-10px"}} />               
                <label id="titulo" className="text-white text-center">  Alerta Ciudadano </label> 
            </a>
        </div>
    </nav>
    );
}
export default Navbar;