import React from "react";
import "./navbar.style.scss";
import { Input } from "../../atoms";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="brand-container">
          <h2>Wallet</h2>
        </div>
        <div className="nav-menu-container">
          <Input type="search" placeholder={"search"} name="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
