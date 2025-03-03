import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="navBtns">
            <button>
              <img src="/yellowsun.svg" alt="" />
            </button>
            <button>
              <i className="fa-solid fa-circle-user"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
