import React from "react";
import "./Header.style.scss";
import logo from "../../assets/logo/clouds-and-sun.png";
const HeaderComponents = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="skysense_logo" className="logo-image" />
            <h2>SkySense</h2>
          </div>
        </nav>
      </header>
    </>
  );
};
export default HeaderComponents;
