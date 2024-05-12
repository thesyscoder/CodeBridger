import React from "react";
import "./sidebar.style.scss";
import { Document, Home, Money, SettingsOption } from "grommet-icons";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="brand">
        <h2>Wallet</h2>
      </div>
      <div className="main-menu-container">
        <ul className="menu">
          <li>
            <Home /> <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <Money /> <NavLink to="/">Expenses</NavLink>
          </li>
          <li>
            <Document />
            <NavLink to="/">Reports</NavLink>
          </li>
          <li>
            {" "}
            <SettingsOption />
            <NavLink to="/">Setting</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
