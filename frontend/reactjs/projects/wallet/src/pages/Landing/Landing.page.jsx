// Landing Page
import React from "react";
import "./landing.style.css";
import walletIcon from "../../assets/wallet_icon.svg";
import bannerImage from "../../assets/landing_banner.svg";
import { Button } from "../../components/atoms";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h3 className="heading">
          <img
            src={walletIcon}
            alt="walletIcon"
            className="logo"
            loading="lazy"
          ></img>
          Wallet
        </h3>
        <h1 className="subHeading">
          Take Control <br />
          of YourFinances
        </h1>
        <p className="paragraph">
          Transform the way you manage money with Wallet App.<br></br> Empower
          yourself to make informed financial decisions and achieve your goals.
        </p>
        <div className="button-container">
          <Button className="primary" title="Sign Up" />
          <Button className="secondary" title="Sign in" />
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
