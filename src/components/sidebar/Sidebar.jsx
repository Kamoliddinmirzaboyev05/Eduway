import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <NavLink to={"/"}>
            <i className="fa-solid fa-house"></i> <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/courses"}>
            <i className="fa-solid fa-code"></i> <p>Kurslar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tasks"}>
            <i className="fa-solid fa-thumbtack"></i> <p>Topshiriqlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/builder"}>
            <i className="fa-solid fa-file-pdf"></i> <p>Resume Builder</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard"}>
            <i className="fa-solid fa-user"></i> <p>Dashboard</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
