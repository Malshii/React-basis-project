import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
        
                    <Link to='/'><button className="btn" aria-current="page">Home</button></Link>
                    <Link to='/profile'><button className="btn">Profile</button></Link>
                    <Link to='/contact'><button className="btn">Contact</button></Link>                          
        
                    </div>
                    </div>
                </div>
            </nav>
            
        </>        
    );
}

export default Navigation;
