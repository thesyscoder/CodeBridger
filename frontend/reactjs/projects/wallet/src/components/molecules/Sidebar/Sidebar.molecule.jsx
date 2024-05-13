// Sidebar.js
import React, { useState } from "react";
import "./sidebar.style.scss";
import {
  CircleInformation,
  Close,
  Deploy,
  Home,
  Logout,
  Menu,
  Money,
  Notes,
  SettingsOption,
} from "grommet-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isClose, setIsClose] = useState(false);

  const toggleSidebar = () => {
    setIsClose(!isClose);
  };

  return (
    <div className={`sidebar ${isClose ? "close" : ""}`}>
      <div className="text-container">
        <div className="brand">
          <img
            style={{
              marginRight: "1rem",
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/000000/wallet--v1.png"
            alt="wallet--v1"
          />
          <h1 className="heading">Wallet</h1>
        </div>
        <div className="ham-button" onClick={toggleSidebar}>
          {isClose ? (
            <Menu className="hamburger" color="gray" size="medium" />
          ) : (
            <Close className="hamburger" color="gray" size="small" />
          )}
        </div>
      </div>
      <div className="menu-container-with-icon">
        <div className="menu-container">
          <ul className="menulist">
            <li className="menu">
              <Home color="gray" size="medium" className="icon" />
              <NavLink to="#">Home</NavLink>
            </li>
            <li className="menu">
              <Money color="gray" size="medium" className="icon" />
              <NavLink to="#">Expenses</NavLink>
            </li>
            <li className="menu">
              <Notes color="gray" size="medium" className="icon" />
              <NavLink to="#">Reports</NavLink>
            </li>
            <li className="menu">
              <SettingsOption color="gray" size="medium" className="icon" />
              <NavLink to="#">Setting</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
