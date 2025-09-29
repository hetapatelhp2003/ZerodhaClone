import React,{useState} from 'react';
import  {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
     const { loginWithRedirect } = useAuth0();
     const { logout } = useAuth0();
       const { user, isAuthenticated, isLoading } = useAuth0();


    return (
       
       
            <nav className="navbar navbar-expand-lg bg-body-tertiary border bottom" style={{backgroundColor:"#FFF"}}>
                <div className="container p-2">
                    <Link className="navbar-brand" to="/"><img src="images/logo.svg" alt="logo" style={{width:"25%"}}></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                            {
                                isAuthenticated ?(<li>
                                 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
                            </li>
                            
                            ):(
                           <li class="nav-item">
                                 <button onClick={() => loginWithRedirect() } style={{textDecoration:"none"}}>Log In</button>
                             </li>
)}
                        </ul>
                        </form>
                        
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;