import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="container p-2">
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container-fluid">
          <Link class="navbar-brand " to="/">
            <img src="media/images/logo.svg" alt="logo" style={{width:"22%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/Support">
                  Support
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
