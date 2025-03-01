import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/public/logo.png" alt="" />
          </div>
          <div className="navBtns">
            <button>
              <img src="/public/yellowsun.svg" alt="" />
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
