import React from "react";
import { useNavigate } from "react-router-dom";
import walletIcon from "../../assets/wallet_icon.svg";
import bannerImage from "../../assets/landing_banner.svg";
import { Button } from "../../components/atoms";
import "./landing.style.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="text-container">
        <h3 className="heading">
          <img
            src={walletIcon}
            alt="walletIcon"
            className="logo"
            loading="lazy"
          />
          Wallet
        </h3>
        <h1 className="subHeading">
          Take Control <br />
          of Your Finances
        </h1>
        <p className="paragraph">
          Transform the way you manage money with Wallet App. <br />
          Empower yourself to make informed financial decisions and achieve your
          goals.
        </p>
        <div className="button-container">
          <Button
            className="primary"
            title="Sign Up"
            onClickAction={() => handleNavigation("/signup")}
          />
          <Button
            className="secondary"
            title="Sign In"
            onClickAction={() => handleNavigation("/signin")}
          />
        </div>
      </div>
      <div className="banner-container">
        <img
          src={bannerImage}
          alt="BannerImage"
          className="banner"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default React.memo(LandingPage);
