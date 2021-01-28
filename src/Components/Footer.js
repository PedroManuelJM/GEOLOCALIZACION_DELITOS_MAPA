import React from 'react';
import icon from '../assets/logogithub.png';
function Footer() {
    return (

    <footer id="footer" className="">
            <div className="container-fluid padded bg-info">
                <br></br>
                <h6 className="text-center text-white"> 2021 - Todos los derechos reservados </h6>
                <div className="col text-center">
                    <h4 id="name" className="text-center text-white" >
                        <span className="text-white"> Pedro Manuel Antonio Jurado Moreno </span>  
                        <a href="https://github.com/PedroManuelJM" target="_blank"><img id="logo-github" src={icon} /></a>
                    </h4>    
                </div>
            </div>
    </footer>

    );
}

export default Footer;