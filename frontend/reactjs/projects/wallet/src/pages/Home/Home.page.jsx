// Home page

import React from "react";
import "./home.style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import wallet_logo from "../../assets/wallet-solid.svg";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();

  const logoutFunction = () => {
    try {
      signOut(auth).then(() => {
        toast.success("Sign out successfully.");
        navigate("/signin");
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="navlink-container">
          <NavLink to="/home" className="brand-link">
            <img src={wallet_logo} alt="wallet_logo" className="logo" />
          </NavLink>
        </div>
        <div className="menu-container">
          <p className="logout" onClick={logoutFunction}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomePage);
