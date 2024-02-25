import React from "react";
import './navhome.css';
function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (
    <div className="qa">
    <header className="main-header">
      <a href="index.html" className="brand-logo">
        <div className="brand-logo-name">
          <h1>Logo</h1>
        </div>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="/micro">FEEDBACK</a>
          </li>
          <li>
            <a href="/login">ADMIN</a>
          </li>
          <li>
            <a href="/adminlogin">STUDENT</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
    
     <div className="lz">
    STUDENT INFORMATION MANAGEMENT SYSTEM
    </div>
    </div>
  );
}

export default Navbar;
